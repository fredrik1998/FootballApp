import React, { useEffect } from 'react'
import { StyledWrapper, StyledTable, StyledLink, StyledDiv } from './SerieALatestMatchesElements'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSerieALatestMatches } from '../../../slice/SerieALatestMatchesSlice'
import Loader from '../../Loader/Loader'
const SerieALatestMatches = () => {
    const dispatch = useDispatch();
    const SerieALatestMatches = useSelector((state) => state.SerieALatestMatches.data);
    const SerieALatestMatchesStatus = useSelector((state) => state.SerieALatestMatches.status)
    const SerieALatestMatchesError= useSelector((state) => state.SerieALatestMatches.error)
    const SerieA = useSelector((state) => state.SerieA.data)

    useEffect(() => {
        if(SerieALatestMatchesStatus === 'idle'){
            dispatch(fetchSerieALatestMatches())
        }
    }, [SerieALatestMatchesStatus, dispatch])

    const getTeamId = (teamName) => {
        for(const team of SerieA){
            if(team.team.shortName === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const getTeamLogo = (teamName) => {
        for(const team of SerieA){
            if(team.team.shortName === teamName){
                return team.team.crest
            }
        }
        return ''
    }

    const matchesByDate = {}
    for(const match of SerieALatestMatches){
        const date = new Date(match.kickoff_time)
        const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
        if(!matchesByDate[formattedDate]){
            matchesByDate[formattedDate] = []
        }
        matchesByDate[formattedDate].push(match)
    }
        
  return (
    <>
    {SerieALatestMatchesStatus === 'loading' ? (
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
                                        <img src={`${getTeamLogo(match.home_team)}`} width={30} height={30}></img>
                                        <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
                                    </td>
                                    <td>{match.home_team_score}</td>
                                    <td>-</td>
                                    <td>{match.away_team_score}</td>
                                    <td>
                                        <img src={`${getTeamLogo(match.away_team)}`} width={30} height={30}></img>
                                        <StyledLink to={`/team/${getTeamId(match.away_team)}`}>{match.away_team}</StyledLink>
                                    </td>
                                </tr>
            )} )}
                        </tbody>
                    </StyledTable>
                </StyledDiv>
            )})}
        </StyledWrapper>
    )}
    </>
  )
}

export default SerieALatestMatches