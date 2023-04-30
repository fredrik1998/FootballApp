import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSerieA } from '../../slice/SerieASlice'
import GlobalStyle from '../../GlobalStyles'
import { 
  StyedWrapper,
  ContentWrapper,
  StyledTable,
  StyledLink } 
  from './SerieAElements'
import { Tab, Tabs } from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'
import Loader from '../../components/Loader/Loader'
import Header from '../../components/Header/Header'
import Topscorers from '../../components/Topscorers/SerieA/Topscorers'
import SerieAMatches from '../../components/UpcommingMatches/SerieA/SerieAMatches'
import SerieALatestMatches from '../../components/LatestMatches/SerieA/SerieALatestMatches'
import SerieATopAssists from '../../components/Topassists/SerieA/SerieATopAssists'
import { useLocation } from 'react-router-dom'

const SerieA = () => {
    const dispatch = useDispatch()
    const SerieA = useSelector((state) => state.SerieA.table);
    const SerieAStatus = useSelector((state) => state.SerieA.tableStatus);
    const [selectedView, setSelectedView] = useState('table')
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const hamburgerMenuRef = useRef()
    const location = useLocation();

    useEffect(() => {
        if(SerieAStatus === 'idle'){
            dispatch(fetchSerieA())
        }
    }, [SerieAStatus, dispatch])

    const toggleSidebar = () => {
      setIsOpen(!isOpen)
    }

    const getTeamId = (teamName) => {
        for(const team of SerieA){
            if(team.team.name === teamName){
                return team.team.id
            }
        }
        return ''
    } 
    
    useEffect(() => {
      setIsOpen(false);
    }, [location]);

  return (
    <>
    <GlobalStyle/>
    <Header toggleSidebar={toggleSidebar} isMobile={isMobile} isOpen={isOpen}/>
    <ContentWrapper>
     <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsMobile={setIsMobile} hamburgerMenuRef={hamburgerMenuRef}/>   
    <StyedWrapper>
     {SerieAStatus === 'loading' ? (
        <Loader/>
     ) : (
        <>
       <Tabs
  value={selectedView}
  onChange={(event, newValue) => setSelectedView(newValue)}
>
  <Tab label='Table' value='table'></Tab>
  <Tab label='Top scorers' value='topscorers'></Tab>
  <Tab label='Upcomming Matches' value='upcommingmatches'></Tab>
  <Tab label='Latest Matches' value='latestmatches'></Tab>
</Tabs>
        {selectedView === 'table' && <StyledTable>
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
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {SerieA.map((team) => {
                    return(
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
     {selectedView === 'topscorers' && <Topscorers/>}
     {selectedView === 'upcommingmatches' && <SerieAMatches/>}
     {selectedView === 'latestmatches' && <SerieALatestMatches/>}  
    </StyedWrapper>
    </ContentWrapper>
    </>
  )
}

export default SerieA