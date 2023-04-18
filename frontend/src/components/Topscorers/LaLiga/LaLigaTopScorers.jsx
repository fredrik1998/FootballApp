import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchLaLigaTopScorers } from '../../../slice/LaLigaSlice'
import Loader from '../../Loader/Loader'
import { StyledTable, StyledWrapper, StyledLink } from './LaLigaTopScorersElements'

const LaLigaTopScorers = () => {
  const dispatch = useDispatch();
  const LaLiga = useSelector((state) => state.LaLiga.table);
  const LaLigaTopScorers = useSelector((state) => state.LaLiga.topScorers);
  const LaLigaTopScorersStatus = useSelector((state) => state.LaLiga.topScorersStatus);
  const LaLigaTopScorersError = useSelector((state) => state.LaLiga.topScorersError);

  useEffect(() => {
    if(LaLigaTopScorersStatus === 'idle'){
        dispatch(fetchLaLigaTopScorers());
    }
  }, [LaLigaTopScorersStatus, dispatch])

  const getTeamLogo = (teamName) => {
    for(const team of LaLiga){
        if(team.team.name === teamName){
            return team.team.crest;
        }
    }
    return '';
  }

  const getTeamId = (teamName) => {
    for(const team of LaLiga){
        if(team.team.name === teamName){
            return team.team.id;
        }
    }
    return '';
  }

  if(LaLigaTopScorersStatus === 'loading'){
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
                {LaLigaTopScorers.map((player) => {
                    return(
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

export default LaLigaTopScorers