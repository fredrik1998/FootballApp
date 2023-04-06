import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import CLTopScorers from '../../components/Topscorers/CL/CLTopScorers'
import CLMatches from '../../components/UpcommingMatches/CL/CLMatches'
import GlobalStyle from '../../GlobalStyles'
import { StyledWrapper, GridContainer, GridItem } from './CLElements'
import { fetchChampionsLeague } from '../../slice/championsLeageuSlice'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../components/Loader/Loader'
const CL = () => {
  const dispatch = useDispatch()
  const championsLeague = useSelector((state) => state.championsLeague.data)
  const championsLeagueStatus = useSelector((state) => state.championsLeague.status)
  const championsLeagueError = useSelector((state) => state.championsLeague.error)

  useEffect(() => {
    if(championsLeagueStatus ==='idle'){
      dispatch(fetchChampionsLeague())
    }
  }, [championsLeague, dispatch])
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <StyledWrapper>
      {championsLeagueStatus === 'loading' ? (
        <Loader/>
      ): (
        <GridContainer>
        {Object.keys(championsLeague).map((groupName, index) => (
          <GridItem key={groupName}>
            <h2>{groupName}</h2>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Team</th>
                  <th></th>
                  <th>MP</th>
                  <th>Won</th>
                  <th>Draw</th>
                  <th>Lost</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {championsLeague[groupName].map((team) => (
                  <tr key={team.position}>
                    <td>{team.position}</td>
                    <td><img style={{width: '30px'}} src={team.team.crestUrl} alt={team.team.name} /></td>
                    <td>{team.team.name}</td>
                    <td>{team.playedGames}</td>
                    <td>{team.won}</td>
                    <td>{team.draw}</td>
                    <td>{team.lost}</td>
                    <td>{team.goalsFor}</td>
                    <td>{team.goalsAgainst}</td>
                    <td>{team.goalDifference}</td>
                    <td>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GridItem>
        ))}
      </GridContainer>

      )}
     
      <CLTopScorers/>
      <CLMatches/>
    </StyledWrapper>
    </>
  )
}

export default CL
