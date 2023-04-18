import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLaLigaTopAssists } from '../../../slice/LaLigaSlice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper } from './LaLigaTopAssistsElements'

const LaLigaTopAssists = () => {
    const dispatch = useDispatch();
    const LaLiga = useSelector((state) => state.LaLiga.table);
    const LaLigaTopAssists = useSelector((state) => state.LaLiga.topAssists);
    const LaLigaTopAssistsStatus = useSelector((state) => state.LaLiga.topAssistsStatus);
    const LaLigaTopAssistsError = useSelector((state) => state.LaLiga.topAssistsError);

    useEffect(() => {
        if(LaLigaTopAssistsStatus === 'idle'){
            dispatch(fetchLaLigaTopAssists());
        }
    }, [LaLigaTopAssistsStatus, dispatch])

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

    if(LaLigaTopAssistsStatus === 'loading'){
        return <Loader/>;
    }
  return (
    <StyledWrapper>
        <StyledTable>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Team</th>
                    <th>Assists</th>
                </tr>
            </thead>
            <tbody>
                {LaLigaTopAssists.map((player) => {
                    return(
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>
                                <img src={getTeamLogo(player.team)} width={30}></img>
                                <StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink>
                            </td>
                            <td>{player.assists}</td>
                        </tr>
                    )
                })}
            </tbody>
        </StyledTable>
    </StyledWrapper>
  )
}

export default LaLigaTopAssists