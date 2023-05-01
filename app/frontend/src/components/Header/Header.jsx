import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {
  StyledHeader,
  StyledLink,
  StyledTitle,
  StyledInput
} from './HeaderElements';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import icon from '../../images/footballicon.png'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const CustomInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: '#f7f7f7',
  borderRadius: 18,
  border: '1px solid #e0e0e0',
  marginTop: '20px',
  fontSize: '1rem',
  color: '#333',
  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  '&:focus': {
    outline: 'none',
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
  },
}));

const Header = ({ toggleSidebar, isMobile, isOpen }) => {
  const searchResultsBoxStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    zIndex: 2,
  };
  
  const searchResultItemStyle = {
    padding: '8px 12px',
    cursor: 'pointer',
    color: '#000'
  }

  const [location] = useState(window.location.pathname);
  const hamburgerMenuRef = useRef();
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const [leagueResponse, teamResponse] = await Promise.all([
        axios.get('/api/leagues/'),
        axios.get('/api/teams/'),
      ]);
      setLeagues(leagueResponse.data.competitions)
      setTeams(teamResponse.data)
    }
    catch(error){
      console.log('Error fetching data', error);
    }
  }
  
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    searchForInfo(event.target.value);
  };

  const searchForInfo = (query) => {
    if (query === '') {
      setSearchResults([]);
    } else {
      if (Array.isArray(leagues) && Array.isArray(teams)) {
        const leagueResults = leagues.filter(league =>
          league.name && league.name.toLowerCase().includes(query.toLowerCase())
        );
  
        const teamResults = teams.filter(team =>
          team.name && team.name.toLowerCase().includes(query.toLowerCase())
        );
  
        setSearchResults([...leagueResults, ...teamResults]);
      } else {
        console.error("Leagues or teams data is not an array:", leagues, teams);
      }
    }
  };
  
  return (
    <StyledHeader>
      <StyledTitle to='/'>
        <img width={30} src={icon}></img>FootyFrenzy
      </StyledTitle>
      {isMobile &&
        (isOpen ? (
          <CloseIcon
            ref={hamburgerMenuRef}
            onClick={() => toggleSidebar(false)}
            style={{ color: '#fff', fontSize: '2.5rem', marginTop: '20px' }}
          />
        ) : (
          <MenuIcon
            ref={hamburgerMenuRef}
            onClick={() => toggleSidebar(true)}
            style={{ color: '#fff', fontSize: '2.5rem', marginTop: '20px' }}
          />
        ))}
      <div style={{ position: 'relative' }}>
     
      <CustomInputBase
      type="text"
      placeholder="League, Team"
      value={searchQuery}
      onChange={handleSearchInputChange}
      startAdornment={
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      }
    />
        {searchResults.length > 0 &&(
  <Paper style={searchResultsBoxStyle}>
    {searchResults.map((result, index) => (
      <div key={index} style={searchResultItemStyle}>
        {result.area ? (
          <>
            <img width={30} src={result.area.flag}></img>
            <StyledLink
              to={`/${result.code}`}
              onClick={() => setSearchResults([])}
            >
              {result.name}
            </StyledLink>
          </>
        ) : (
          <>
            <img width={30} src={result.crest}></img>
            <StyledLink
              to={`/team/${result.id}`}
              onClick={() => setSearchResults([])}
            >
              {result.name}
            </StyledLink>
          </>
        )}
      </div>
    ))}
  </Paper>
)}
</div>
    </StyledHeader>
  );
  
};

export default Header;
