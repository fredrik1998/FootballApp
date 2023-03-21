import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopScorers = () => {
  const [topScorers, setTopScorers] = useState([]);

  useEffect(() => {
    axios.get('/api/leagues/topscorer/')
      .then(response => {
        setTopScorers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Top Scorers</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Goals</th>
          </tr>
        </thead>
        <tbody>
          {topScorers.map(player => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopScorers;
