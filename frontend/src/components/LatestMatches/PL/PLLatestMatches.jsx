import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPLLatestMatches } from '../../../slice/PLLatestMatchesSlice'
import Loader from '../../Loader/Loader'
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './PLLatestMatchesElements'

const PLLatestMatches = () => {
    const dispatch = useDispatch()
    const PLLatestMatches = useSelector((state) => state.PLLatestMatches.data)
    const PLLatestMatchesStatus = useSelector((state) => state.PLLatestMatches.status)
    const PLLatestMatchesError = useSelector((state) => state.PLLatestMatches.error)
    const premierLeague = useSelector((state) => state.premierLeague.data)

    useEffect(() => {
        if(PLLatestMatchesStatus === 'idle'){
            dispatch(fetchPLLatestMatches())
        }
    }, [PLLatestMatchesStatus, dispatch])

    const getTeamId = (teamName) => {
        for(const team of premierLeague){
            if(team.team.shortName === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const getTeamLogo = (teamName) => {
        for(const team of premierLeague){
            if(team.team.shortName === teamName){
                return team.team.crest
            }
        }
        return ''
    }

    const matchesByDate = {}
    for(const match of PLLatestMatches){
        const date = new Date(match.kickoff_time)
        const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
        if(!matchesByDate[formattedDate]){
            matchesByDate[formattedDate] = []
        }
        matchesByDate[formattedDate].push(match)
    }

  return (
    <>
    {PLLatestMatchesStatus === 'loading' ? (
        <Loader/>
    ) : (
        <StyledWrapper>
            {Object.keys(matchesByDate).map((date) => {
                return(
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
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={getTeamLogo(match.home_team)} width={30} height={30}></img>
                                            <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
                                        </td>
                                        <td>{match.home_team_score}</td>
                                        <td>-</td>
                                        <td>{match.away_team_score}</td>
                                        <td>
                                            <img src={getTeamLogo(match.away_team)} width={30} height={30}></img>
                                            <StyledLink to={`/team/${getTeamId(match.away_team)}`}>{match.away_team}</StyledLink>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </StyledTable>
                </StyledDiv>
            )})}
        </StyledWrapper>
    )}
    </>
  )
}

export default PLLatestMatches