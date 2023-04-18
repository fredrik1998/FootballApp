import React, { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBundesliga } from '../../slice/BundesligaSlice'
import Loader from '../../components/Loader/Loader'
import { ContentWrapper, StyledLink, StyledTable, StyledWrapper } from './BundesligaElements'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Tabs, Tab } from '@mui/material'
import BundesligaTopScorer from '../../components/Topscorers/Bundesliga/BundesligaTopScorer'
import BundesligaTopAssists from '../../components/Topassists/Bundesliga/BundesligaTopAssists'
import BundesligaUpcommingMatches from '../../components/UpcommingMatches/Bundesliga/BundesligaUpcommingMatches'
import BundesligaLatestMatches from '../../components/LatestMatches/Bundesliga/BundesligaLatestMatches'
const Bundesliga = () => {
    const dispatch = useDispatch();
    const Bundesliga = useSelector((state) => state.Bundesliga.table);
    const BundesligaStatus = useSelector((state) => state.Bundesliga.tableStatus);
    const BundesligaError = useSelector((state) => state.Bundesliga.tableError);
    const [selectedView, setSelectedView] = useState('table')
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const hamburgerMenuRef = useRef()
    const location = useLocation();

    useEffect(() => {
        if(BundesligaStatus === 'idle'){
            dispatch(fetchBundesliga())
        }
    }, [BundesligaStatus, dispatch])

    useEffect(() => {
      setIsOpen(false);
    }, [location]);
    
    const getTeamId = (teamName) => {
        for(const team of Bundesliga){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <GlobalStyle />
          <Header toggleSidebar={toggleSidebar} isMobile={isMobile} isOpen={isOpen}  />
          <ContentWrapper>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsMobile={setIsMobile} hamburgerMenuRef={hamburgerMenuRef} />
          <StyledWrapper>
            {BundesligaStatus === 'loading' ? (
              <Loader />
            ) : (
              <>
                <Tabs
                value={selectedView}
                onChange={(event, newValue) => setSelectedView(newValue)}
                >
                <Tab label="Table" value='table'></Tab>
                <Tab label="Top scorers" value='topscorers'></Tab>
                <Tab label='Top assists' value='topassists'></Tab>
                <Tab label='Upcomming Matches' value='upcommingmatches'></Tab>
                <Tab label="Latest Matches" value='latestmatches'></Tab>
                </Tabs>
                {selectedView === 'table' &&(<StyledTable>
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
                    {Bundesliga.map((team) => {
                        console.log(Bundesliga)
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
    )}
              </>
            )}
            {selectedView === 'topscorers' && <BundesligaTopScorer/>}
            {selectedView === 'topassists' && <BundesligaTopAssists/>}
            {selectedView === 'upcommingmatches' && <BundesligaUpcommingMatches/>}
            {selectedView === 'latestmatches' && <BundesligaLatestMatches/>}
          </StyledWrapper>
          </ContentWrapper>
        </>
      );
    };

export default Bundesliga