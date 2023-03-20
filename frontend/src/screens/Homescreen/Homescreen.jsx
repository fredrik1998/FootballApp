import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Homescreen = () => {
    const [premierLeague, setPremierLeague] = useState([])

    useEffect(() => {
    
    axios.get('/api/leagues/', {
      headers: {
        'X-Auth-Token': '58d5d5351e7444a2815fcbb0b0a058b9' , 
      },
    })
        .then(response => {
            const premierLeagueData = response.data
            setPremierLeague(premierLeagueData)
        })
        .catch(error => console.log(error))
    }, [])
  return (
    <>
    <h1>Premier League Table</h1>
    <table>
        <thead>
            <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Won</th>
                <th>Drawn</th>
                <th>Lost</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
  {premierLeague.map((team, index) => {
    return (
      <tr key={team.position}>
        <td>{team.position}</td>
        <img style={{width: '30px'}} src={team.team.crestUrl} alt={team.team.name} />
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
    )
  })}
</tbody>

    </table>

    </>
  )
}

export default Homescreen
