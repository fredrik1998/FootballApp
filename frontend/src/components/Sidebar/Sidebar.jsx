import React, { useState, useEffect, useRef } from 'react';
import { StyledLink, StyledNav, StyledImage, StyledSidebar, StyledButton } from './SidebarElements';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLeagues } from '../../slice/LeaguesSlice';

const Sidebar = ({toggleSidebar, isOpen, setIsMobile, hamburgerMenuRef}) => {
  const dispatch = useDispatch()
  const Leagues = useSelector((state) => state.Leagues.data)
  const LeaguesStatus = useSelector((state) => state.Leagues.status)
  const sidebarRef = useRef()

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
  }, [toggleSidebar, hamburgerMenuRef]);

  const getChampionsLeagueEmblem = () => {
    const championsLeague = Leagues.find(league => league.name === 'UEFA Champions League');
    return championsLeague ? championsLeague.area.flag : '';
  };

  const getPremierLeagueEmblem = () => {
    const premierLeague = Leagues.find(league => league.name === 'Premier League');
    return premierLeague ? premierLeague.area.flag : '';
  }

  const getSerieAEmblem = () => {
    const serieA = Leagues.find(league => league.name === 'Serie A')
    return serieA ? serieA.area.flag : ''
  }

  const getBundesligaEmblem = () => {
    const bundesliga = Leagues.find(league => league.name === 'Bundesliga')
    return bundesliga ? bundesliga.area.flag : ''
  }

  const getLigue1Emblem = () => {
    const Ligue1 = Leagues.find(league => league.name === 'Ligue 1')
    return Ligue1 ? Ligue1.area.flag : ''
  }

  const getLaLigaEmblem = () => {
    const LaLiga = Leagues.find(league => league.name === 'Primera Division')
    return LaLiga ? LaLiga.area.flag : ''
  }

  return (
    <StyledNav className={isOpen || window.innerWidth >= 768 ? 'expanded' : ''} ref={sidebarRef}>
      <h1>Leagues</h1>
      <StyledLink to='/homescreen'><StyledImage src={getPremierLeagueEmblem()}></StyledImage>Premier League</StyledLink>
      <StyledLink to='/CL'><StyledImage src={getChampionsLeagueEmblem()} ></StyledImage>Champions League</StyledLink>
      <StyledLink to='/SA'><StyledImage src={getSerieAEmblem()}></StyledImage>Serie A</StyledLink>
      <StyledLink><StyledImage src={getBundesligaEmblem()} ></StyledImage>Bundesliga</StyledLink>
      <StyledLink><StyledImage src={getLigue1Emblem()}></StyledImage>Ligue 1</StyledLink>
      <StyledLink><StyledImage src={getLaLigaEmblem()}></StyledImage>La Liga</StyledLink>
    </StyledNav>
  );
};

export default Sidebar;
