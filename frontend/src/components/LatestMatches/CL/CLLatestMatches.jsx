import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCLLatestMatches } from '../../../slice/CLLatestMatchesSlice';
import Loader from '../../Loader/Loader';
import { StyledLink, StyledTable, StyledWrapper, StyledDiv } from './CLLatestMatchesElements';

const CLLatestMatches = () => {
  const dispatch = useDispatch();
  const CLLatestMatches = useSelector((state) => state.CLLatestMatches.data);
  const CLLatestMatchesStatus = useSelector((state) => state.CLLatestMatches.status);
  const championsLeague = useSelector((state) => state.championsLeague.data);

  useEffect(() => {
    if (CLLatestMatchesStatus === 'idle') {
      dispatch(fetchCLLatestMatches());
    }
  }, [dispatch, CLLatestMatchesStatus]);

  const getTeamLogo = (teamName) => {
    for (const group in championsLeague) {
      for (const team of championsLeague[group]) {
        if (team.team.shortName === teamName) {
          return team.team.crest;
        }
      }
    }
    return '';
  };

  const getTeamId = (teamName) => {
    for (const group in championsLeague) {
      for (const team of championsLeague[group]) {
        if (team.team.shortName === teamName) {
          return team.team.id;
        }
      }
    }
    return '';
  };

  const matchesByDate = useMemo(() => {
    const matches = {};
    for (const match of CLLatestMatches) {
      const date = new Date(match.kickoff_time);
      const formattedDate = date.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
      if (!matches[formattedDate]) {
        matches[formattedDate] = [];
      }
      matches[formattedDate].push(match);
    }
    return matches;
  }, [CLLatestMatches]);


  if (CLLatestMatchesStatus === 'loading') {
    return <Loader />;
  }

  return (
    <StyledWrapper>
      {Object.keys(matchesByDate).map((date) => (
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
              {matchesByDate[date].map((match, index) => (
                <tr key={index}>
                  <td>
                    <img src={getTeamLogo(match.home_team)} width={30} alt={match.home_team} />
                    <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
                  </td>
                  <td>{match.home_team_score}</td>
                  <td>-</td>
                  <td>{match.away_team_score}</td>
                  <td>
                    <img src={getTeamLogo(match.away_team)} width={30} alt={match.away_team} />
                    <StyledLink to={`/team/${getTeamId(match.away_team)}`}>{match.away_team}</StyledLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledDiv>
      ))}
    </StyledWrapper>
  );
};

export default CLLatestMatches;
