import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSerieAUpcommingMatches } from '../../../slice/SerieASlice'
import { StyledWrapper, StyledTable, StyledLink, StyledDiv } from './SerieAMatchesElements'
import Loader from '../../Loader/Loader'
import CLLatestMatches from '../../LatestMatches/CL/CLLatestMatches'
const SerieAMatches = () => {
    const dispatch = useDispatch()
    const SerieAUpcommingMatches = useSelector((state) => state.SerieA.upcomingMatches);
    const SerieAUpcommingMatchesStatus = useSelector((state) => state.SerieA.upcomingMatchesStatus);
    const SerieAUpcommingMatchesErrror = useSelector((state) => state.SerieA.upcomingMatchesError);
    const SerieA = useSelector((state) => state.SerieA.table);
    
    useEffect(() => {
        if(SerieAUpcommingMatchesStatus === 'idle'){
            dispatch(fetchSerieAUpcommingMatches())
        }
    }, [SerieAUpcommingMatchesStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of SerieA){
            if(team.team.shortName === teamName){
                return team.team.crest;
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of SerieA){
            if(team.team.shortName === teamName){
                return team.team.id
            }
        }
        return ''
    }
    
    const matchesByDate = useMemo(() => {
        const matches = {}
        for (const match of SerieAUpcommingMatches){
        const date = new Date(match.kickoff_time)
        const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
        if(!matches[formattedDate]){
            matches[formattedDate] = []
        }
        matches[formattedDate].push(match)
    }
    return matches
}, [SerieAUpcommingMatches])

if(SerieAUpcommingMatchesStatus === 'loading'){
    return <Loader/>;
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
                                <th>AwayTeam</th>
                            </tr>
                        </thead>
                        <tbody>
                          {matchesByDate[date].map((match, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                     <img src={`${getTeamLogo(match.home_team)}`} width={30} height={30}></img> 
                                     <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>  
                                    </td>
                                    <td>
                                        <img src={`${getTeamLogo(match.away_team)}`} width={30} height={30}></img>
                                        <StyledLink to={`/team/${getTeamId(match.away_team)}`} >{match.away_team}</StyledLink>
                                    </td>
                                </tr>
                            )
                          })}
                        </tbody>
                    </StyledTable>
                </StyledDiv>
            )
            )}
        </StyledWrapper>
  )
}

export default SerieAMatches