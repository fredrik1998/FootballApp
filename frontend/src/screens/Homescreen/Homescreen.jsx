import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import TopScorers from '../../components/Topscorers/Topscorers';
import PLMatches from '../../components/UpcommingMatches/PL/PLMatches';
import GlobalStyle from '../../GlobalStyles';
import { StyledWrapper } from './HomescreenElements';
import Loader from '../../components/Loader/Loader';

const Homescreen = () => {
  const [premierLeague, setPremierLeague] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/leagues/PL/')
      .then(response => {
        const premierLeagueData = response.data;
        setPremierLeague(premierLeagueData);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledWrapper>
        {isLoading ? (
          <Loader />
        ) : (
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
              {premierLeague.map(team => {
                return (
                  <tr key={team.position}>
                    <td>{team.position}</td>
                    <img
                      style={{ width: '30px' }}
                      src={team.team.crestUrl}
                      alt={team.team.name}
                    />
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
                );
              })}
            </tbody>
          </table>
        )}
        <TopScorers />
        <PLMatches />
      </StyledWrapper>
    </>
  );
};

export default Homescreen;
