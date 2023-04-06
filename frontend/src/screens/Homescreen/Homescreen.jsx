import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import TopScorers from '../../components/Topscorers/Topscorers';
import PLMatches from '../../components/UpcommingMatches/PL/PLMatches';
import GlobalStyle from '../../GlobalStyles';
import { StyledWrapper, StyledDiv, StyledTable } from './HomescreenElements';
import Loader from '../../components/Loader/Loader';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPremierLeague } from '../../slice/premierLeagueSlice';

const Homescreen = () => {
  const dispatch = useDispatch();
  const premierLeague = useSelector((state) => state.premierLeague.data);
  const premierLeagueStatus = useSelector((state) => state.premierLeague.status);
  const premierLeagueError = useSelector((state) => state.premierLeague.error);

  useEffect(() => {
    if (premierLeagueStatus === 'idle') {
      dispatch(fetchPremierLeague());
    }
  }, [premierLeagueStatus, dispatch]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledWrapper>
        {premierLeagueStatus === 'loading' ? (
          <Loader />
        ) : (
          <>
            <Sidebar />
            <StyledTable>
              <thead>
                <tr>
                  <th></th>
                  <th>Team</th>
                  <th></th>
                  <th>MP</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GF</th>
                  <th>GA</th>
                  <th>GD</th>
                  <th>P</th>
                </tr>
              </thead>
              <tbody>
                {premierLeague.map((team) => {
                  return (
                    <tr key={team.position}>
                      <td>{team.position}</td>

                      <img
                        style={{ width: '30px', marginTop: '12px' }}
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
            </StyledTable>
          </>
        )}
        <StyledDiv>
          <TopScorers />
          <PLMatches />
        </StyledDiv>
      </StyledWrapper>
    </>
  );
};

export default Homescreen;
