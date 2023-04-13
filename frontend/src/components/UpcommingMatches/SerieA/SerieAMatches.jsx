import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSerieAUpcommingMatches } from '../../../slice/SerieAUpcommingMatchesSlice'
import { StyledWrapper, StyledTable, StyledLink, StyledDiv } from './SerieAMatchesElements'
import Loader from '../../Loader/Loader'
const SerieAMatches = () => {
    const dispatch = useDispatch()
    const SerieAUpcommingMatches = useSelector((state) => state.SerieAUpcommingMatches.data)
    const SerieAUpcommingMatchesStatus = useSelector((state) => state.SerieAUpcommingMatches.status)
    const SerieAUpcommingMatchesErrror = useSelector((state) => state.SerieAUpcommingMatches.error)
    const SerieA = useSelector((state) => state.SerieA.data)
    
    useEffect(() => {
        if(SerieAUpcommingMatchesStatus === 'idle'){
            dispatch(fetchSerieAUpcommingMatches())
        }
    }, [SerieAUpcommingMatchesStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of SerieA){
            if(team.team.name === teamName){
                return team.team.crest;
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of SerieA){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const matchesByDate = {}
    for(const match of SerieAUpcommingMatches){
        const date = new Date(match.kickoff_time)
        const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
        if(!matchesByDate[formattedDate]){
            matchesByDate[formattedDate] = []
        }
        matchesByDate[formattedDate].push(match)
    }

  return (
    <>
    {SerieAUpcommingMatchesStatus === 'loading' ? (
        <Loader/>
    ): (
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
    )}

    </>
  )
}

export default SerieAMatches