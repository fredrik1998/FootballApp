import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLigue1TopAssists } from '../../../slice/Ligue1Slice'
import Loader from '../../Loader/Loader'
import { StyledLink, StyledTable, StyledWrapper } from './Ligue1TopAssistsElements'

const Ligue1TopAssists = () => {
    const dispatch = useDispatch();
    const Ligue1 = useSelector((state) => state.Ligue1.table);
    const Ligue1TopAssists = useSelector((state) => state.Ligue1.topAssists);
    const Ligue1TopAssistsStatus = useSelector((state) => state.Ligue1.topAssistsStatus);
    const Ligue1TopAssistsError = useSelector((state) => state.Ligue1.topAssistsError);

    const getTeamLogo = (teamName) => {
        for(const team of Ligue1){
            if(team.team.name === teamName){
                return team.team.crest;
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of Ligue1){
            if(team.team.name === teamName){
                return team.team.id;
            }
        }
        return ''
    }

    useEffect(() => {
        if(Ligue1TopAssistsStatus === 'idle'){
            dispatch(fetchLigue1TopAssists());
        }
    }, [Ligue1TopAssistsStatus, dispatch])

    if(Ligue1TopAssistsStatus === 'loading'){
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
                {Ligue1TopAssists.map((player) => {
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

export default Ligue1TopAssists