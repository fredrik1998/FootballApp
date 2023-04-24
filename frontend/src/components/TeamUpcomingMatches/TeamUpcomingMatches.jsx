import React, { useEffect, useMemo, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchTeamUpcomingMatches } from '../../slice/TeamUpcomingMatchesSlice'
import Loader from '../Loader/Loader'
import { StyledDiv, StyledLink, StyledTable, StyledWrapper } from './TeamUpcomingMatchesElements'

const TeamUpcomingMatches = () => {
    const dispatch = useDispatch();
    const TeamUpcomingMatches = useSelector((state) => state.TeamUpcomingMatches.data);
    const TeamUpcomingMatchesStatus = useSelector((state) => state.TeamUpcomingMatches.status);
    const TeamUpcomingMatchesError = useSelector((state) => state.TeamUpcomingMatches.error);
    const TeamSquad = useSelector((state) => state.TeamSquad.data);
    const { team_id } = useParams();
    console.log('TeamSquad:', TeamSquad);

    useEffect(() => {
        if(TeamUpcomingMatchesStatus === 'idle'){
            dispatch(fetchTeamUpcomingMatches(team_id));
        }
    }, [TeamUpcomingMatchesStatus, dispatch, team_id])

    const matchesByDate = useMemo(() => {
        const matches = {};
        for(const match of TeamUpcomingMatches){
            const date = new Date(match.kickoff_time)
            const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
            if(!matches[formattedDate]){
                matches[formattedDate] = []
            }
            matches[formattedDate].push(match)
        }
        return matches;
    },  [TeamUpcomingMatches])

    if(TeamUpcomingMatchesStatus === 'loading'){
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
                        </tr>
                    </thead>
                    <tbody>
                        {matchesByDate[date].map((match) => (
                            <tr key={match.id}>
                                <td>
                                    <img src={match.home_team_crest} width={30}></img>
                                    <StyledLink to={`/team/${match.home_team_id}`}>{match.home_team}</StyledLink>
                                </td>
                                <td>
                                    <img src={match.away_team_crest} width={30}></img>
                                    <StyledLink to={`/team/${match.away_team_id}`}>{match.away_team}</StyledLink>
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

export default TeamUpcomingMatches