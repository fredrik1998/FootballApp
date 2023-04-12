import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import CLTopScorers from '../../components/Topscorers/CL/CLTopScorers'
import CLMatches from '../../components/UpcommingMatches/CL/CLMatches'
import GlobalStyle from '../../GlobalStyles'
import { StyledWrapper, GridContainer, GridItem, StyledLink, ContentWrapper } from './CLElements'
import { fetchChampionsLeague } from '../../slice/championsLeageuSlice'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../../components/Loader/Loader'
import {Tab, Tabs} from '@mui/material'
import styled from 'styled-components'
import CLTopAssists from '../../components/Topassists/CL/CLTopAssists'
import Sidebar from '../../components/Sidebar/Sidebar'

const StyledTab = styled(Tab)`
color: #fafafa;
`

const CL = () => {
  const dispatch = useDispatch()
  const championsLeague = useSelector((state) => state.championsLeague.data)
  const championsLeagueStatus = useSelector((state) => state.championsLeague.status)
  const championsLeagueError = useSelector((state) => state.championsLeague.error)
  const [selectedView, setSelectedView] = useState('table')
  const [IsSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const hamburgerMenuRef = useRef()

  useEffect(() => {
    if(championsLeagueStatus ==='idle'){
      dispatch(fetchChampionsLeague())
    }
  }, [championsLeague, dispatch])

  const toggleSidebar = (event) => {
    if(event) event.stopPropagation();
    setIsSidebarOpen(!setIsSidebarOpen)
  }

  return (
    <>
    <GlobalStyle/>
    <Header toggleSidebar={toggleSidebar} isMobile={isMobile}/>
    <ContentWrapper>
    <Sidebar isOpen={IsSidebarOpen} toggleSidebar={toggleSidebar} setIsMobile={setIsMobile} hamburgerMenuRef={hamburgerMenuRef} />
    <StyledWrapper>
      {championsLeagueStatus === 'loading' ? (
        <Loader/>
      ): (
        <>
        <Tabs
        value={selectedView}
        onChange={(event, newValue) => setSelectedView(newValue)}
        centered
        >
        <StyledTab label="Table" value="table" />
        <StyledTab label="Top Scorers" value="topScorers" />
        <StyledTab label="Upcoming Matches" value="upcommingMatches" />
        <StyledTab label="Top Assists" value="topAssists"></StyledTab>
        </Tabs>
        {selectedView === 'table' && (
           <GridContainer>
           {Object.keys(championsLeague).map((groupName, index) => (
             <GridItem key={groupName}>
               <h2>{groupName}</h2>
               <table>
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
                   {championsLeague[groupName].map((team) => (
                     <tr key={team.position}>
                       <td>{team.position}</td>
                       <td><img style={{width: '30px'}} src={team.team.crest} alt={team.team.name}/></td>
                       <td><StyledLink to={`/team/${team.team.id}`}>{team.team.shortName}</StyledLink></td>
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
       
      </>
      )}
     
      {selectedView==='topScorers' && <CLTopScorers/>}
      {selectedView === 'upcommingMatches' && <CLMatches/>}
      {selectedView === 'topAssists' && <CLTopAssists/>}
    </StyledWrapper>
    </ContentWrapper>
    </>
  )
}

export default CL
