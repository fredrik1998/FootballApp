import React, { useEffect } from 'react'
import Loader from '../../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCLUpcommingMatches } from '../../../slice/championsLeageuSlice';
import { StyledTable, StyledWrapper, StyledDiv, StyledLink } from './CLMatchesElements'
import { useNavigate } from 'react-router-dom';

const CLMatches = () => {
    const dispatch = useDispatch()
    const CLUpcommingMatches = useSelector((state) => state.championsLeague.upcomingMatches);
    const CLUpcommingMatchesStatus = useSelector((state) => state.championsLeague.upcomingMatchesStatus);
    const CLUpcommingMatchesError = useSelector((state) => state.championsLeague.upcomingMatchesError);
    const championsLeague = useSelector((state) => state.championsLeague.table);
    const navigate = useNavigate();
    useEffect(() => {
        if(CLUpcommingMatchesStatus === 'idle'){
            dispatch(fetchCLUpcommingMatches())
        }
    }, [CLUpcommingMatchesStatus, dispatch])

    const formatMatchStage = (stage) => {
        switch (stage) {  
          case 'QUARTER_FINALS':
            return 'QF';
          case 'SEMI_FINALS':
            return 'SF';
          case 'FINAL':
            return 'F';
          default:
            return stage;
        }
      };

      const getTeamLogo = (teamName) => {
        for (const group in championsLeague){
          for (const team of championsLeague[group]){
            if(team.team.name === teamName){
              return team.team.crest
            }
          }
        }
        return ''
      }

     const getTeamId = (teamName) => {
      for (const group in championsLeague){
        for(const team of championsLeague[group]){
          if(team.team.name === teamName){
            return team.team.id
          }
        }
      }
      return ''
     }
    
      const matchesByDate = {};
      for (const match of CLUpcommingMatches) {
        console.log('Match object:', match);
        console.log('Kickoff time:', match.utcDate);
        const date = new Date(match.utcDate);
        const formattedDate = date.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
        if (!matchesByDate[formattedDate]) {
          matchesByDate[formattedDate] = [];
        }
        matchesByDate[formattedDate].push(match);
      }
      
  return (
    <>
    {CLUpcommingMatchesStatus === 'loading' ? (
        <Loader/>
    ) : (
        <StyledWrapper>
           {Object.keys(matchesByDate).map((date) => (
    <StyledDiv key={date}>
      <h3>{date}</h3>
      <StyledTable>
        <thead>
          <tr>
            <th>Stage</th>
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
                <td>{formatMatchStage(match.stage)}</td>
                <td>
                  <img src={getTeamLogo(match.homeTeam.name)} alt={`${match.homeTeam.name} logo`} width="30" height="30" />
                  <StyledLink to={`/team/${getTeamId(match.homeTeam.name)}`}>{match.homeTeam.name}</StyledLink>
                </td>
                <td>
                  <img src={getTeamLogo(match.awayTeam.name)} alt={`${match.awayTeam.name} logo`} width="30" height="30" />
                  <StyledLink to={`/team/${getTeamId(match.awayTeam.name)}`}>{match.awayTeam.name}</StyledLink>
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

export default CLMatches
