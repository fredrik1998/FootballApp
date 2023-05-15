import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodaysMatches } from '../../slice/todaysMatchesSlice'
import Loader from '../../components/Loader/Loader'
import GlobalStyle from '../../GlobalStyles'
import Header from '../../components/Header/Header'
import { ContentWrapper, StyledDiv, StyledLink, StyledTable, StyledWrapper, AlertDiv } from './HomescreenElements'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom'
import { CustomInputBase } from '../../components/Header/Header'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Alert } from '@mui/material'

const Homescreen = () => {
    const dispatch = useDispatch();
    const TodaysMatches = useSelector((state) => state.TodaysMatches.data);
    const TodaysMatchesStatus = useSelector((state) => state.TodaysMatches.status);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const location = useLocation();
    const hamburgerMenuRef = useRef();
    const navigate = useNavigate();

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
      const searchMatches = searchResults.length > 0 ? searchResults : TodaysMatches.matches;
      for (const match of searchMatches || []) {
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
  }, [TodaysMatches.matches, searchResults]);
  

    const formatMatchStatus = (status, dateString) => {
      switch (status) {
        case 'TIMED':
          return formatTime(dateString);
        case 'POSTPONED':
          return 'PP';
        case 'IN_PLAY':
          return 'LIVE';
        case 'PAUSED':
        return 'HT'
        case 'FINISHED':
          return 'FT';
      }
    };
    
    const formatTime = (dateString) => {
      const date = new Date(dateString);
      const options = {  hour: '2-digit', minute: '2-digit' };
      return date.toLocaleTimeString(undefined, options);
    };

    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
      searchForInfo(event.target.value);
    }

    const searchForInfo = (query) => {
      if(query === ''){
          setSearchResults([]);
          setNoResults(false);
      } else {
          if(Array.isArray(TodaysMatches.matches)){
              const results = TodaysMatches.matches.filter((match) => {
                  return match.competition.name.toLowerCase().includes(query.toLowerCase());
              });
              const countryResults = TodaysMatches.matches.filter((country) => {
                  return country.area.name.toLowerCase().includes(query.toLowerCase());
              });
              const homeTeamResults = TodaysMatches.matches.filter((team) => {
                return team.homeTeam.name.toLowerCase().includes(query.toLowerCase());
              });
              const awayTeamResults = TodaysMatches.matches.filter((team) => {
                return team.awayTeam.name.toLowerCase().includes(query.toLowerCase());
              });
              const uniqueResults = [...new Set([...results, ...countryResults, ...homeTeamResults, ...awayTeamResults])];
              setSearchResults(uniqueResults);
              setNoResults(uniqueResults.length === 0); // Here we set noResults to true if uniqueResults is empty
          } else {
              console.error('TodaysMatches is not an array');
          }
      }
  };
  
  
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
                <h1>Todays Matches</h1>
                <CustomInputBase
                style={{maxWidth: '350px'}}
                type='text'
                placeholder='Country, League or Team'
                value={searchQuery}
                onChange={handleInputChange}
                startAdornment={
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
                }
                >
                </CustomInputBase>
                {noResults && searchQuery.length > 0 ? (
                  <AlertDiv>
                  <Alert severity='warning'>No results found</Alert>
                  </AlertDiv>
                ) : (
                  Object.keys(matchesByCompetition).map((competitionName) => {
                    const competition = matchesByCompetition[competitionName];
                    return (
                      <StyledDiv key={competitionName}>
                        <div style={{display: 'flex', gap: '5px'}}>
                        <img src={competition.emblem} width={30} height={30} style={{marginTop: '15px'}}></img>
                        <h2>{competitionName}</h2>
                        </div>
                        <StyledTable>
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {competition.matches.map((match) => {
                              return (
                                <tr key={match.id} onClick={(e) => {
                                  if(e.target.tagName.toLowerCase() === 'a'){
                                    return;
                                  }
                                  navigate(`/match/${match.id}`)
                                }}>
                            <td>
                              <img src={match.homeTeam.crest} width={30}></img>
                              <StyledLink to={`/team/${match.homeTeam.id}`}>{match.homeTeam.shortName}</StyledLink>
                            </td>
                            <td data-content={formatMatchStatus(match.status, match.utcDate)}>{formatMatchStatus(match.status, match.utcDate)}</td>
                            <td>
                              <div className="score-container">
                                <span>{match.score.fullTime.home}</span>
                                <span className="score-separator">-</span>
                                <span>{match.score.fullTime.away}</span>
                              </div>
                            </td>
                            <td></td>
                            <td></td>
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
                  })
                )}
                </>
              )}
            </StyledWrapper>
          </ContentWrapper>
        </>
      );
    };
    
    export default Homescreen;