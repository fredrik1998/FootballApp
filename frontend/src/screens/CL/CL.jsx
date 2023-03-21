import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import CLTopScorers from '../../components/Topscorers/CL/CLTopScorers'
import CLMatches from '../../components/UpcommingMatches/CL/CLMatches'
import GlobalStyle from '../../GlobalStyles'
import { StyledWrapper, GridContainer, GridItem } from './CLElements'

const CL = () => {
  const [championsleague, setChampionsLeague] = useState({})

  useEffect(() => {
    axios.get('api/leagues/CL/', {
    })
    .then(response => {
      const championsLeagueData = response.data
      setChampionsLeague(championsLeagueData)
    }).catch(console.error())
  }, [])

  return (
    <>
    <GlobalStyle/>
    <Header/>
    <StyledWrapper>
      <GridContainer>
        {Object.keys(championsleague).map((groupName, index) => (
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
                {championsleague[groupName].map((team) => (
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
      <CLTopScorers/>
      <CLMatches/>
    </StyledWrapper>
    </>
  )
}

export default CL
