import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLigue1 } from '../../slice/Ligue1Slice'
import Loader from '../../components/Loader/Loader'
import {Tabs, Tab } from '@mui/material'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import GlobalStyle from '../../GlobalStyles'
import {StyledWrapper, StyledDiv, StyledLink, StyledTable, ContentWrapper } from './Ligue1Elements'
import Ligue1TopScorers from '../../components/Topscorers/Ligue1/Ligue1TopScorers'
import Ligue1TopAssists from '../../components/Topassists/Ligue1/Ligue1TopAssists'
import Ligue1UpcommingMatches from '../../components/UpcommingMatches/Ligue1/Ligue1UpcommingMatches'
import Ligue1LatestMatches from '../../components/LatestMatches/Ligue1/Ligue1LatestMatches'

const Ligue1 = () => {
    const dispatch = useDispatch();
    const Ligue1 = useSelector((state) => state.Ligue1.data);
    const Ligue1Status = useSelector((state) => state.Ligue1.status);
    const Ligue1Error = useSelector((state) => state.Ligue1.error);
    const [selectedView, setSelectedView] = useState('table');
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const hamburgerMenuRef = useRef();

    useEffect(() => {
        if(Ligue1Status === 'idle'){
            dispatch(fetchLigue1());
        }
    }, [Ligue1Status, dispatch])

    const getTeamId = (teamName) => {
        for(const team of Ligue1){
            if(team.team.name === teamName){
                return team.team.id;
            }
        }
        return '';
    }

    const toggleSidebar = (open) => {
        setIsOpen(open)
    }

  return (
    <>
    <GlobalStyle/>
    <Header toggleSidebar={toggleSidebar}  isMobile={isMobile}/>
    <ContentWrapper>
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsMobile={setIsMobile} hamburgerMenuRef={hamburgerMenuRef}/>
    <StyledWrapper>
    {Ligue1Status === 'loading' ? (
        <Loader/>
    ) : (
        <>
            <Tabs
            value={selectedView}
            onChange={(event, newValue) => setSelectedView(newValue)}
            >
            <Tab label='Table' value='table'></Tab>
            <Tab label='Top scorers' value='topscorers'></Tab>
            <Tab label="Top assists" value='topassists'></Tab>
            <Tab label="Upcomming matches" value='upcommingmatches'></Tab>
            <Tab label='Latest Matches' value="latestmatches"></Tab>
            </Tabs>
        {selectedView === 'table' && <StyledTable>
            <thead>
                <tr>
                    <th>Position</th>
                    <th></th>
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
                {Ligue1.map((team) => {
                    return(
                        <tr key={team.id}>
                            <td>{team.position}</td>
                            <td>
                                <img width={30} src={team.team.crest}></img>
                                <StyledLink to={`/team/${getTeamId(team.team.name)}`}>{team.team.name}</StyledLink>
                            </td>
                            <td></td>
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
        </StyledTable>}     
        </>
    )}
    {selectedView === 'topscorers' && <Ligue1TopScorers/>} 
    {selectedView === 'topassists' && <Ligue1TopAssists/>}
    {selectedView === 'upcommingmatches' && <Ligue1UpcommingMatches/>}
    {selectedView === 'latestmatches' && <Ligue1LatestMatches/>}
    </StyledWrapper>   
    </ContentWrapper>
    </>
  )
}

export default Ligue1