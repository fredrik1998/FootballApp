import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLaLigaLatestMatches } from '../../../slice/LaLigaSlice'
import Loader from '../../Loader/Loader'
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './LaLigaLatestMatchesElements'
import { useNavigate } from 'react-router-dom'

const LaLigaLatestMatches = () => {
    const dispatch = useDispatch();
    const LaLiga = useSelector((state) => state.LaLiga.table);
    const LaLigaLatestMatches = useSelector((state) => state.LaLiga.latestMatches);
    const LaLigaLatestMatchesStatus = useSelector((state) => state.LaLiga.latestMatchesStatus);
    const LaLigaLatestMatchesError = useSelector((state) => state.LaLiga.latestMatchesError);
    const navigate = useNavigate();
    useEffect(() => {
        if(LaLigaLatestMatchesStatus === 'idle'){
            dispatch(fetchLaLigaLatestMatches());
        }
    }, [dispatch, LaLigaLatestMatchesStatus])

    const getTeamLogo = (teamName) => {
        for(const team of LaLiga){
            if(team.team.shortName === teamName){
                return team.team.crest;
            }
        }
        return '';
    }

    const getTeamId = (teamName) => {
        for(const team of LaLiga){
            if(team.team.shortName === teamName){
                return team.team.id;
            }
        }
        return '';
    }

    const matchesByDate = useMemo(() => {
        const matches = {};
        for(const match of LaLigaLatestMatches){
            const date = new Date(match.kickoff_time)
            const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
            if(!matches[formattedDate]){
                matches[formattedDate] = []
            }
            matches[formattedDate].push(match)
        }
        return matches
    }, [LaLigaLatestMatches])

    if(LaLigaLatestMatchesStatus === 'loading'){
        return <Loader/>;
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
                            {matchesByDate[date].map((match) => {
                                return(
                                    <tr key={match.id} onClick={(e) => {
                                        if(e.target.tagName.toLowerCase() === 'a'){
                                            return '';
                                        }
                                        navigate(`/match/${match.id}`)
                                    }}>
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
            )
        })}
    </StyledWrapper>
  )
}

export default LaLigaLatestMatches