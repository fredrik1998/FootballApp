import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodaysMatches } from '../../slice/todaysMatchesSlice'
import Loader from '../../components/Loader/Loader'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { ContentWrapper, StyledDiv, StyledLink, StyledTable, StyledWrapper } from './HomescreenElements'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
const Homescreen = () => {
    const dispatch = useDispatch();
    const TodaysMatches = useSelector((state) => state.TodaysMatches.data);
    const TodaysMatchesStatus = useSelector((state) => state.TodaysMatches.status);
    const TodaysMatchesError = useSelector((state) => state.TodaysMatches.error);
    const [selectedView, setSelectedView] = useState('table');
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    const hamburgerMenuRef = useRef();

    useEffect(() => {
        if(TodaysMatchesStatus === 'idle'){
            dispatch(fetchTodaysMatches());
        }
    }, [dispatch, TodaysMatchesStatus])

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const matchesByCompetition = useMemo(() => {
        const matches = {};
        for (const match of TodaysMatches.matches || []) {
            const competition = match.competition;
            if (!matches[competition.name]) {
                matches[competition.name] = {
                    emblem: competition.emblem,
                    matches: [],
                };
            }
            matches[competition.name].matches.push(match);
        }
        return matches;
    }, [TodaysMatches.matches]);
    

    return (
        <>
          <GlobalStyle />
          <Header toggleSidebar={toggleSidebar} isMobile={isMobile} isOpen={isOpen} />
          <ContentWrapper>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setIsMobile={setIsMobile} hamburgerMenuRef={hamburgerMenuRef} />
            <StyledWrapper>
              {TodaysMatchesStatus === 'loading' ? (
                <Loader />
              ) : (
                <>
                <h1>Todays Matches:</h1>
                  {Object.keys(matchesByCompetition).map((competitionName) => {
                    const competition = matchesByCompetition[competitionName];
                    return (
                      <StyledDiv key={competitionName}>
                        <div style={{display: 'flex'}}>
                        <img src={competition.emblem} width={50} height={50}></img>
                        <h2>{competitionName}</h2>
                        </div>
                        <StyledTable>
                          <thead>
                            <tr>
                              <th>Hometeam</th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th>Awayteam</th>
                            </tr>
                          </thead>
                          <tbody>
                            {competition.matches.map((match) => {
                              return (
                                <tr key={match.id}>
                                  <td>
                                    <img src={match.homeTeam.crest} width={30}></img>
                                    <StyledLink to={`/team/${match.homeTeam.id}`}>{match.homeTeam.shortName}</StyledLink>
                                  </td>
                                    <td data-content={match.status}>{match.status}</td>
                                  <td>{match.score.fullTime.home}</td>
                                  <td>-</td>
                                  <td>{match.score.fullTime.away}</td>
                                  <td>
                                    <img src={match.awayTeam.crest} width={30}></img>
                                    <StyledLink to={`/team/${match.awayTeam.id}`}>{match.awayTeam.shortName}</StyledLink>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </StyledTable>
                      </StyledDiv>
                    );
                  })}
                </>
              )}
            </StyledWrapper>
          </ContentWrapper>
        </>
      );
    };
    
    export default Homescreen;