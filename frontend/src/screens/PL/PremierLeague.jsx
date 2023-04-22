import React, { useEffect, useState, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TopScorers from '../../components/Topscorers/PL/Topscorers';
import PLMatches from '../../components/UpcommingMatches/PL/PLMatches';
import PLTopAssists from '../../components/Topassists/PL/PLTopAssists';
import GlobalStyle from '../../GlobalStyles';
import { StyledWrapper,StyledTable, StyledLink, ContentWrapper} from './PremierLeagueElements';
import Loader from '../../components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPremierLeague } from '../../slice/premierLeagueSlice';
import {Tabs, Tab, Fab,} from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar';
import PLLatestMatches from '../../components/LatestMatches/PL/PLLatestMatches';

const PremierLeague = () => {
  const dispatch = useDispatch();
  const premierLeague = useSelector((state) => state.premierLeague.table);
  const premierLeagueStatus = useSelector((state) => state.premierLeague.tableStatus);
  const premierLeagueError = useSelector((state) => state.premierLeague.tableError);
  const [selectedView, setSelectedView] = useState('table')
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();
  const hamburgerMenuRef = useRef()

  useEffect(() => {
    if (premierLeagueStatus === 'idle') {
      dispatch(fetchPremierLeague());
    }
  }, [premierLeagueStatus, dispatch]);

  const getTeamId = (teamName) => {
    for(const team of premierLeague){
      if(team.team.name === teamName){
        return team.team.id
      }
    }
    return ''
  }

 const toggleSidebar = () => {
  setIsOpen(!isOpen);
 }

useEffect(() => {
  setIsOpen(false);
}, [location]);

  return (
    <>
      <GlobalStyle />
      <Header toggleSidebar={toggleSidebar} isMobile={isMobile} isOpen={isOpen}  />
      <ContentWrapper>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsMobile={setIsMobile} hamburgerMenuRef={hamburgerMenuRef} />
      <StyledWrapper>
        {premierLeagueStatus === 'loading' ? (
          <Loader />
        ) : (
          <>
            <Tabs
            value={selectedView}
            onChange={(event, newValue) => setSelectedView(newValue)}
            >
            <Tab label="Table" value='table'></Tab>
            <Tab label="Top scorers" value='topscorers'></Tab>
            <Tab label="Upcomming matches" value='upcommingMatches'></Tab>  
            <Tab label="Latest matches" value='latestmatches'></Tab>
            </Tabs>
            {selectedView === 'table' && <StyledTable>
              <thead>
                <tr>
                  <th style={{padding: '5px'}}></th>
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
                      <th>{team.position}</th>

                      <img
                        style={{ width: '30px', marginTop: '12px' }}
                        src={team.team.crest}
                        alt={team.team.name}
                      />
                      <td>
  <StyledLink to={`/team/${getTeamId(team.team.name)}`}>{team.team.name}</StyledLink>
</td>
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
}
          </>
        )}
          {selectedView === 'topscorers' && <TopScorers/>}
          {selectedView === 'upcommingMatches' && <PLMatches />}
          {selectedView === 'topassists' && <PLTopAssists/>}
          {selectedView === 'latestmatches' && <PLLatestMatches/>}
      </StyledWrapper>
      </ContentWrapper>
    </>
  );
};

export default PremierLeague;
