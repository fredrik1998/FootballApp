import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPLLatestMatches } from '../../../slice/PLLatestMatchesSlice';
import Loader from '../../Loader/Loader';
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './PLLatestMatchesElements';

const PLLatestMatches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPLLatestMatches());
  }, [dispatch]);

  const premierLeague = useSelector((state) => state.premierLeague.data);
  const PLLatestMatches = useSelector((state) => state.PLLatestMatches.data);
  const PLLatestMatchesStatus = useSelector((state) => state.PLLatestMatches.status);
  const PLLatestMatchesError = useSelector((state) => state.PLLatestMatches.error);

  const matchesByDate = useMemo(() => {
    const matches = {};
    PLLatestMatches.forEach((match) => {
      const date = new Date(match.kickoff_time);
      const formattedDate = date.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
      if (!matches[formattedDate]) {
        matches[formattedDate] = [];
      }
      matches[formattedDate].push(match);
    });
    return matches;
  }, [PLLatestMatches]);

  const getTeamLogo = (teamName) => {
    const team = premierLeague.find((team) => team.team.shortName === teamName);
    return team ? team.team.crest : '';
  };

  const getTeamId = (teamName) => {
    const team = premierLeague.find((team) => team.team.shortName === teamName);
    return team ? team.team.id : '';
  };

  return (
    <StyledWrapper>
      {PLLatestMatchesStatus === 'loading' ? (
        <Loader />
      ) : (
        <>
          {Object.keys(matchesByDate).map((date) => {
            return (
              <StyledDiv key={date}>
                <h3>{date}</h3>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>Hometeam</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>Awayteam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchesByDate[date].map((match, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={getTeamLogo(match.home_team)} width={30} height={30} />
                            <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
                          </td>
                          <td>{match.home_team_score}</td>
                          <td>-</td>
                          <td>{match.away_team_score}</td>
                          <td>
                            <img src={getTeamLogo(match.away_team)} width={30} height={30} />
                            <StyledLink to={`/team/${getTeamId(match.away_team)}`}>{match.away_team}</StyledLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </StyledTable>
              </StyledDiv>
            );
          })}
        </>
      )}
    </StyledWrapper>
  );
};

export default PLLatestMatches;
