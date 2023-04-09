import React, { useEffect } from 'react'
import { fetchPLTopAssists } from '../../../slice/PLTopAssistsSlice'
import { useDispatch, useSelector } from 'react-redux'
import GlobalStyle from '../../../GlobalStyles'
import Loader from '../../Loader/Loader'
import { StyledWrapper, StyledTable, StyledLink } from './PLTopAssistsElements'
const PLTopAssists = () => {  
    const dispatch = useDispatch()
    const PLTopAssists = useSelector((state) => state.PLTopAssists.data)
    const PLTopAssistsStatus = useSelector((state) => state.PLTopAssists.status)
    const PLTopAssistsError = useSelector((state) => state.PLTopAssists.error)
    const premierLeague = useSelector((state) => state.premierLeague.data)
    useEffect(() => {
        if(PLTopAssistsStatus === 'idle'){
            dispatch(fetchPLTopAssists())
        }
    }, [PLTopAssistsStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for(const team of premierLeague){
            if(team.team.name === teamName){
                return team.team.crest
            }
        }
        return ''
    }

    const getTeamId = (teamName) => {
        for(const team of premierLeague){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    }

  return (
    <>
    <GlobalStyle/>
    <StyledWrapper>
        {PLTopAssistsStatus === 'loading' ? (
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
                {PLTopAssists.map((player) => (
                     <tr key={player.id}>
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

export default PLTopAssists