import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLigue1TopScorer } from '../../../slice/Ligue1TopScorerSlice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper } from './Ligue1TopScorersElements'

const Ligue1TopScorers = () => {
    const dispatch = useDispatch();
    const Ligue1 = useSelector((state) => state.Ligue1.data);
    const Ligue1TopScorer = useSelector((state) => state.Ligue1TopScorer.data);
    const Ligue1TopScorerStatus = useSelector((state) => state.Ligue1TopScorer.status);
    const Ligue1TopScorersError = useSelector((state) => state.Ligue1TopScorer.error);

    useEffect(() => {
        if(Ligue1TopScorerStatus === 'idle'){
            dispatch(fetchLigue1TopScorer());
        }
    }, [Ligue1TopScorerStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of Ligue1){
            if(team.team.name === teamName){
                return team.team.crest;
            }
        }
        return '';
    }

    const getTeamId = (teamName) => {
        for(const team of Ligue1){
            if(team.team.name === teamName){
                return team.team.id;
            }
        }
        return '';
    }

    if(Ligue1TopScorerStatus === 'loading'){
        return <Loader/>;
    }


  return (
    <StyledWrapper>
        <StyledTable>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Goals</th>
                </tr>
            </thead>
            <tbody>
                {Ligue1TopScorer.map((player) => {
                    return (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>
                                <img src={getTeamLogo(player.team)} width={30}></img>
                                <StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink>
                            </td>
                            <td>{player.goals}</td>
                        </tr>
                    )
                })}
            </tbody>
        </StyledTable>
    </StyledWrapper>
  )
}

export default Ligue1TopScorers