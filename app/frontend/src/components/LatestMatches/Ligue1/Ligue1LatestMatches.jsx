import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLigue1LatestMatches } from '../../../slice/Ligue1Slice'
import Loader from '../../Loader/Loader'
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './Ligue1LatestMatchesElements'

const Ligue1LatestMatches = () => {
    const dispatch = useDispatch();
    const Ligue1 = useSelector((state) => state.Ligue1.table);
    const Ligue1LatestMatches = useSelector((state) => state.Ligue1.latestMatches);
    const Ligue1LatestMatchesStatus = useSelector((state) => state.Ligue1.latestMatchesStatus);
    useEffect(() => {
        if(Ligue1LatestMatchesStatus === 'idle'){
            dispatch(fetchLigue1LatestMatches());
        }
    }, [dispatch, Ligue1LatestMatchesStatus])

    const getTeamLogo = (teamName) => {
        for(const team of Ligue1){
            if(team.team.shortName === teamName){
                return team.team.crest;
            }
        }
        return '';
    }

    const getTeamId = (teamName) => {
        for(const team of Ligue1){
            if(team.team.shortName === teamName){
                return team.team.id;
            }
        }
        return '';
    }

    const matchesByDate = useMemo(() => {
        const matches = {};
        for(const match of Ligue1LatestMatches){
            const date = new Date(match.kickoff_time);
            const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
            if(!matches[formattedDate]){
                matches[formattedDate] = []
            }
            matches[formattedDate].push(match);
        }
        return matches;
    }, [Ligue1LatestMatches])

    if(Ligue1LatestMatchesStatus === 'loading'){
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
                                <tr key={index} onClick={(e) => {
                                    if(e.target.tagName.toLowerCase() === 'a'){
                                        return;
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
       )})}
    </StyledWrapper>
  )
}

export default Ligue1LatestMatches