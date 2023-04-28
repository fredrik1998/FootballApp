import React, { useState, useEffect, useRef } from 'react';
import { StyledLink, StyledNav, StyledImage} from './SidebarElements';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeagues } from '../../slice/LeaguesSlice';

const Sidebar = ({toggleSidebar, isOpen, setIsMobile, hamburgerMenuRef}) => {
  const dispatch = useDispatch()
  const Leagues = useSelector((state) => state.Leagues.data)
  const LeaguesStatus = useSelector((state) => state.Leagues.status)
  const sidebarRef = useRef()
  const [isExpanded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      setIsMobile(viewportWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  useEffect(() => {
    if(LeaguesStatus === 'idle'){
      dispatch(fetchLeagues())
    }
  }, [LeaguesStatus, dispatch])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen && 
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        (!hamburgerMenuRef.current || !hamburgerMenuRef.current.contains(event.target)) &&
        window.innerWidth < 768
      ) {
        toggleSidebar(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleSidebar, hamburgerMenuRef, isOpen]);

  const getChampionsLeagueEmblem = () => {
    const championsLeague = Leagues.find(league => league.name === 'UEFA Champions League');
    return championsLeague ? championsLeague.area.flag : '';
  };

  const getPremierLeagueEmblem = () => {
    const premierLeague = Leagues.find(league => league.name === 'Premier League');
    return premierLeague ? premierLeague.emblem : '';
  };

  const getSerieAEmblem = () => {
    const serieA = Leagues.find(league => league.name === 'Serie A')
    return serieA ? serieA.emblem : ''
  };

  const getBundesligaEmblem = () => {
    const bundesliga = Leagues.find(league => league.name === 'Bundesliga')
    return bundesliga ? bundesliga.emblem : ''
  };

  const getLigue1Emblem = () => {
    const Ligue1 = Leagues.find(league => league.name === 'Ligue 1')
    return Ligue1 ? Ligue1.emblem : ''
  };

  const getLaLigaEmblem = () => {
    const LaLiga = Leagues.find(league => league.name === 'Primera Division')
    return LaLiga ? LaLiga.emblem : ''
  };

  return (
    <StyledNav className={isOpen || window.innerWidth >= 768 ? 'expanded' : '' || isExpanded ? "expanded slideIn" : "slideOut"} ref={sidebarRef}  animate={isOpen ? "open" : "closed"}
   >
    <h1 style={{margin: 0}}>Leagues</h1>
    <StyledLink to='/PL'><StyledImage src={getPremierLeagueEmblem()}></StyledImage>Premier League</StyledLink>
    <StyledLink to='/CL'><StyledImage src={getChampionsLeagueEmblem()} ></StyledImage>Champions League</StyledLink>
    <StyledLink to='/SA'><StyledImage src={getSerieAEmblem()}></StyledImage>Serie A</StyledLink>
    <StyledLink to='/BL'><StyledImage src={getBundesligaEmblem()} ></StyledImage>Bundesliga</StyledLink>
    <StyledLink to='/Ligue1'><StyledImage src={getLigue1Emblem()}></StyledImage>Ligue 1</StyledLink>
    <StyledLink to='/LaLiga'><StyledImage src={getLaLigaEmblem()}></StyledImage>La Liga</StyledLink>

    </StyledNav>
  );
};

export default Sidebar;
