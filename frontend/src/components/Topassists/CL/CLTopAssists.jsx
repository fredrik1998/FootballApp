import React, { useEffect } from 'react'
import { fetchCLTopAssists } from '../../../slice/CLTopAssistsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { StyledWrapper, StyledTable, StyledLink} from './CLTopAssistsElements'
import Loader from '../../Loader/Loader'
import GlobalStyle from '../../../GlobalStyles'

const CLTopAssists = () => {
    const dispatch = useDispatch()
    const CLTopAssists = useSelector((state) => state.CLTopAssists.data)
    const CLTopAssistsStatus = useSelector((state) => state.CLTopAssists.status)
    const CLTopAssistsError = useSelector((state) => state.CLTopAssists.error)
    const championsLeague = useSelector((state) => state.championsLeague.data)

    useEffect(() => {
        if(CLTopAssistsStatus === 'idle'){
            dispatch(fetchCLTopAssists())
        }
    }, [CLTopAssistsStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const group in championsLeague){
            for(const team of championsLeague[group]){
                if(team.team.name === teamName){
                    return team.team.crest
                }
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for (const group in championsLeague){
            for(const team of championsLeague[group]){
                if(team.team.name === teamName){
                    return team.team.id
                }
            }
        }
        return ''
    }

  return (
    <>
    <GlobalStyle/>
    <StyledWrapper>
    {CLTopAssistsStatus === 'loading' ? (
        <Loader/>
    ): (
        <StyledTable>
        <thead>
            <tr>
                <th>Player</th>
                <th>Team</th>
                <th>Assists</th>
            </tr>
        </thead>
        <tbody>
         {CLTopAssists.map((player) => (
            <tr key={player.name}>
                <td>{player.name}</td>
                <td><img src={getTeamLogo(player.team)} width={30}></img>
                <StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink></td>
                <td>{player.assists}</td>
            </tr>
         ))}
        </tbody>
    </StyledTable>
    )}
    </StyledWrapper>
    </>
  )
}

export default CLTopAssists