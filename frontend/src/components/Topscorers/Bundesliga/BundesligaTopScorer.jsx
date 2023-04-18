import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBundesligaTopScorer } from '../../../slice/BundesligaSlice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper } from './BundesligaTopScorerElements'

const BundesligaTopScorer = () => {
    const dispatch = useDispatch()
    const BundesligaTopScorer = useSelector((state) => state.Bundesliga.topScorers);
    const BundesligaTopScorerStatus = useSelector((state) => state.Bundesliga.topScorersStatus);
    const BundesligaTopScorerError = useSelector((state) => state.Bundesliga.topScorersError);
    const Bundesliga = useSelector((state) => state.Bundesliga.table);

    useEffect(() => {
        if(BundesligaTopScorerStatus === 'idle'){
            dispatch(fetchBundesligaTopScorer());
        }
    }, [BundesligaTopScorerStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.crest;
            }
        }
        return '';
    }

    const getTeamId = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.id;
            }
        }
    }

    if(BundesligaTopScorerStatus === 'loading'){
        return <Loader/>;
    }

  return (
        <StyledWrapper>
            <StyledTable>
              <thead>
                <tr>
                    <td>Player</td>
                    <td>Team</td>
                    <td>Goal</td>
                </tr>
                </thead>
                <tbody>
                    {BundesligaTopScorer.map((player) => {
                        return(
                            <tr key={player.id}>
                                <td>{player.name}</td>
                                <td>
                                    <img src={getTeamLogo(player.team)} width={30} ></img>
                                    <StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink>
                                </td>
                                <td>{player.goals}</td>
                            </tr>
                        );
                    })}
                </tbody>  
            </StyledTable>
        </StyledWrapper>
  );
}

export default BundesligaTopScorer