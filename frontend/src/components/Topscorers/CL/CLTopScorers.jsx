import { fetchTopScorerCL } from '../../../slice/championsLeageuSlice'
import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../../GlobalStyles'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../Loader/Loader'
import { StyledTable, StyledWrapper, StyledLink } from './CLTopScorerElements'
const CLTopScorers = () => {
    const dispatch = useDispatch()
    const CLTopScorer = useSelector((state) => state.championsLeague.topScorers)
    const CLTopScorerStatus = useSelector((state) => state.championsLeague.topScorersStatus)
    const CLTopScorerError = useSelector((state) => state.championsLeague.topScorersError)
    const championsLeague = useSelector((state) => state.championsLeague.table)

    useEffect(() => {
        if(CLTopScorerStatus === 'idle'){
            dispatch(fetchTopScorerCL())
        }
    }, [CLTopScorerStatus, dispatch])

    const getTeamLogo = (teamName) => {
        for (const group in championsLeague) {
          for (const team of championsLeague[group]) {
            console.log(`Comparing: ${team.team.name} === ${teamName}`);
            if (team.team.name === teamName) {
              return team.team.crest;
            }
          }
        }
        return "";
      };

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
    {CLTopScorerStatus === 'loading' ? (
        <Loader/>
    ) : (
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
            {CLTopScorer.map((player) => {
                return(
                <tr key={player.id}>
                    <td>
                        <StyledLink to={`/player/${player.id}`}>{player.name}</StyledLink>
                    </td>
                    <td><img src={getTeamLogo(player.team)} width={30}></img>
                    <StyledLink to={`/team/${getTeamId(player.team)}`}>{player.team}</StyledLink></td>
                    <td>{player.goals}</td>
                </tr>
            )})}
        </tbody>
    </StyledTable>
    </StyledWrapper>
    )}
   
    </>
  )
}

export default CLTopScorers