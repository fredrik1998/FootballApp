import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBundesligaUpcommingMatches } from '../../../slice/BundesligaSlice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper, StyledDiv } from './BundesligaUpcommingMatchesElements'

const BundesligaUpcommingMatches = () => {
    const dispatch = useDispatch();
    const BundesligaUpcommingMatches = useSelector((state) => state.Bundesliga.upcomingMatches);
    const BundesligaUpcommingMatchesStatus = useSelector((state) => state.Bundesliga.upcomingMatchesStatus);
    const BundesligaUpcommingMatchesError = useSelector((state) => state.Bundesliga.upcomingMatchesError);
    const Bundesliga = useSelector((state) => state.Bundesliga.table);

    useEffect(() => {
        if(BundesligaUpcommingMatchesStatus === 'idle'){
            dispatch(fetchBundesligaUpcommingMatches());
        }
    }, [BundesligaUpcommingMatchesStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.crest
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const matchesByDate = useMemo(() => {
        const matches = {};
        for(const match of BundesligaUpcommingMatches){
            const date = new Date(match.kickoff_time);
            const formattedDate = date.toLocaleDateString('en-GB', 
            {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
            if(!matches[formattedDate]){
                matches[formattedDate] = []
            }
            matches[formattedDate].push(match)
        }
        return matches
    }, [BundesligaUpcommingMatches])

    if(BundesligaUpcommingMatchesStatus === 'loading'){
        return <Loader/>;
    }

  return (
    <StyledWrapper>
        {Object.keys(matchesByDate).map((date) => {
            return (
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
                                return(
                                    <tr key={index}>
                                       <td>
                                        <img src={getTeamLogo(match.home_team)} width={30}></img>
                                        <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
                                       </td>
                                       <td>
                                        <img src={getTeamLogo(match.away_team)} width={30}></img>
                                        <StyledLink to={`/team/${getTeamId(match.away_team)}`}>{match.away_team}</StyledLink>
                                       </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </StyledTable>
                </StyledDiv>
            )
        })}
    </StyledWrapper>
  
  )
}

export default BundesligaUpcommingMatches