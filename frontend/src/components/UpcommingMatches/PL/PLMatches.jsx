import React, { useEffect} from 'react';
import { StyledWrapper, StyledTable, StyledDiv, StyledLink } from './PLMatchesElements';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPLUpcommingMatches } from '../../../slice/premierLeagueSlice';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const PLMatches = () => {
  const dispatch = useDispatch();
  const PLUpcommingMatches = useSelector((state) => state.premierLeague.upcomingMatches);
  const PLUpcommingMatchesStatus = useSelector((state) => state.premierLeague.upcomingMatchesStatus);
  const premierLeague = useSelector((state) => state.premierLeague.table);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (PLUpcommingMatchesStatus === 'idle') {
      dispatch(fetchPLUpcommingMatches());
    }
  }, [PLUpcommingMatchesStatus, dispatch]);

  const getTeamLogo = (teamName) => {
    for (const team of premierLeague) {
      if (team.team.name === teamName) {
        return team.team.crest;
      }
    }
    return '';
  };

  const getTeamId = (teamName) => {
    for(const team of premierLeague){
      if(team.team.name === teamName){
        return team.team.id
      }
    }
    return ''
  }

  const matchesByDate = {};
for (const match of PLUpcommingMatches) {
  const date = new Date(match.kickoff_time);
  const formattedDate = date.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  if (!matchesByDate[formattedDate]) {
    matchesByDate[formattedDate] = [];
  }
  matchesByDate[formattedDate].push(match);
}

  return (
    <>
      {PLUpcommingMatchesStatus === 'loading' ? (
        <Loader />
      ) : (
        <StyledWrapper>
          {Object.keys(matchesByDate).map((date) => (
            <StyledDiv key={date}>
              <h3>{date}</h3>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Hometeam</th>
                    <th>Awayteam</th>
    
                  </tr>
                </thead>
                <tbody>
                  {matchesByDate[date].map((match, index) => {
                    return (
                      <tr key={index} onClick={(e) => {
                        if(e.target.tagName.toLowerCase() === 'a'){
                          return;
                        }
                        navigate(`/match/${match.id}`)
                      }}>
  <td>
    <img src={getTeamLogo(match.home_team)} width={30} height={30} alt={match.home_team} />
    <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
  </td>
  <td>
    <img src={getTeamLogo(match.away_team)} width={30} height={30} alt={match.away_team} />
    <StyledLink to={`/team/${getTeamId(match.away_team)}`}>{match.away_team}</StyledLink>
  </td>
</tr>

                    );
                  })}
                </tbody>
              </StyledTable>
            </StyledDiv>
          ))}
        </StyledWrapper>
      )}
    </>
  );
};

export default PLMatches;
