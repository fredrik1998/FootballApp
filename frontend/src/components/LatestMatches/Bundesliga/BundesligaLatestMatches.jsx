import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBundesligaLatestMatches } from '../../../slice/BundesligaLatestMatchesSlice'
import Loader from '../../Loader/Loader'
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './BundesligaLatestMatchesElements'

const BundesligaLatestMatches = () => {
    const dispatch = useDispatch();
    const BundesligaLatestMatches = useSelector((state) => state.BundesligaLatestMatches.data);
    const BundesligaLatestMatchesStatus = useSelector((state) => state.BundesligaLatestMatches.status);
    const BundesligaLatestMatchesError = useSelector((state) => state.BundesligaLatestMatches.error);
    const Bundesliga = useSelector((state) => state.Bundesliga.data);

    useEffect(() => {
        if(BundesligaLatestMatchesStatus === 'idle'){
            dispatch(fetchBundesligaLatestMatches())
        }
    }, [BundesligaLatestMatchesStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.shortName === teamName){
                return team.team.crest
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.shortName === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const matchesByDate = useMemo(() => {
        const matches = {}
        for(const match of BundesligaLatestMatches){
            const date = new Date(match.kickoff_time)
            const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
            if(!matches[formattedDate]){
                matches[formattedDate] = []
            }
            matches[formattedDate].push(match)
        }
        return matches
    }, [BundesligaLatestMatches])

    if(BundesligaLatestMatchesStatus === 'loading'){
        return <Loader/>
    }

  return (
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
                                    <img src={getTeamLogo(match.home_team)} width={30}></img>
                                    <StyledLink to={`/team/${getTeamId(match.home_team)}`}>{match.home_team}</StyledLink>
                                    </td>
                                    <td>{match.home_team_score}</td>
                                    <td>-</td>
                                    <td>{match.away_team_score}</td>
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
        )})}
    </StyledWrapper>
  )
}

export default BundesligaLatestMatches