import React, { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeamLatestMatches } from '../../slice/TeamLatestMatchesSlice'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './TeamLatestMatchesElements'
const TeamLatestMatches = () => {
    const dispatch = useDispatch();
    const TeamLatestMatches = useSelector((state) => state.TeamLatestMatches.data);
    const TeamLatestMatchesStatus = useSelector((state) => state.TeamLatestMatches.status);
    const TeamLatestMatchesError = useSelector((state) => state.TeamLatestMatches.error);
    const { team_id } = useParams();

    useEffect(() => {
        if(TeamLatestMatchesStatus === 'idle'){
            dispatch(fetchTeamLatestMatches(team_id));
        }
    }, [TeamLatestMatchesStatus, dispatch, team_id])

    const matchesByDate = useMemo(() => {
        const matches = {};
        for(const match of TeamLatestMatches){
            const date = new Date(match.kickoff_time)
            const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
            if(!matches[formattedDate]){
                matches[formattedDate] = []
            }
            matches[formattedDate].push(match)
        }
        return matches;
    }, [TeamLatestMatches])

    if(TeamLatestMatchesStatus === 'loading'){
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
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {matchesByDate[date].map((match) => (
                            <tr key={match.id}>
                                <td>
                                    <img src={match.home_team_crest} width={30}></img>
                                    <StyledLink to={`/team/${match.home_team_id}`}>{match.home_team}</StyledLink>
                                </td>
                                <td>{match.home_team_score}</td>
                                <td>-</td>
                                <td>{match.away_team_score}</td>
                                <td>
                                    <img src={match.away_team_crest} width={30}></img>
                                    <StyledLink to={`/match/${match.away_team_id}`}>{match.away_team}</StyledLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </StyledDiv>
        ))}
    </StyledWrapper>
  )
}

export default TeamLatestMatches