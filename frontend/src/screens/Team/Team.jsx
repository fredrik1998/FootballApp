import React, { useEffect, useMemo, useRef, useState } from 'react';
import GlobalStyle from '../../GlobalStyles';
import Header from '../../components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeamSquad } from '../../slice/TeamSquadSlice';
import { 
  StyledWrapper,
  StyledTable,
  StyledH1,
  StyledLogo,
  StyledLink,
  StyledDiv,
  StyledCountryLogo,
  StyledText,
} from './TeamElements';
import Loader from '../../components/Loader/Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Tab, Tabs } from '@mui/material';
import TeamUpcomingMatches from '../../components/TeamUpcomingMatches/TeamUpcomingMatches';
import TeamLatestMatches from '../../components/TeamLatestMatches/TeamLatestMatches';

const Team = () => {
  const dispatch = useDispatch();
  const TeamSquad = useSelector((state) => state.TeamSquad.data);
  const TeamSquadStatus = useSelector((state) => state.TeamSquad.status);
  const TeamSquadError = useSelector((state) => state.TeamSquad.error);
  const TeamLatestMatches = useSelector((state) => state.TeamLatestMatches.data);
  const prevTeamId = useRef(null)
  const { team_id } = useParams();
  const [flags, setFlags] = useState({});
  const [selectedView, setSelectedView] = useState('squad')

  useEffect(() => {
    if(TeamSquadStatus === 'idle' || team_id !== prevTeamId.current){
        prevTeamId.current = team_id;
        dispatch(fetchTeamSquad(team_id));
    }

  }, [TeamSquadStatus, dispatch, team_id]);

  const squadByPosition = useMemo(() => {
    if (!TeamSquad.squad) {
      return {};
    }
    const squadPosition = {};
    for (const squad of TeamSquad.squad) {
      if (!squadPosition[squad.position]) {
        squadPosition[squad.position] = [];
      }
      squadPosition[squad.position].push(squad);
    }
    return squadPosition;
  }, [TeamSquad.squad]);

  const customFlagUrls = {
    England: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",
    Scotland: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",
    Wales: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Wales.svg/1280px-Flag_of_Wales.svg.png",
  };
  
  const fetchFlags = async (nationalities) => {
    const flagUrls = {};
    for (const nationality of nationalities) {
      if (customFlagUrls[nationality]) {
        flagUrls[nationality] = customFlagUrls[nationality];
      } else {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(nationality)}?fullText=true`
          );
          if (response.status === 200) {
            const data = response.data;
            flagUrls[nationality] = data[0].flags.svg;
          }
        } catch (error) {
          console.error(`Error fetching flag for ${nationality}:`, error);
        }
      }
    }
    setFlags(flagUrls);
  };

  useEffect(() => {
    if (TeamSquad.squad) {
      const uniqueNationalities = new Set(
        TeamSquad.squad.map((player) => player.nationality)
      );
      fetchFlags(uniqueNationalities);
    }
  }, [TeamSquad.squad]);

  useEffect(() => {
    setSelectedView('squad')
  }, [team_id])

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledWrapper>
        {TeamSquadStatus === 'loading' ? (
          <Loader />
        ) : (
            <>
            <Tabs
            value={selectedView}
            onChange={(event, newValue) => setSelectedView(newValue)}
            >
            <Tab label='squad' value='squad'></Tab>
            <Tab label='Upcoming Matches' value='upcomingmatches'></Tab>
            <Tab label='Latest Matches' value='latestmatches'></Tab>
            </Tabs>
            {selectedView === 'squad' && (
              <> 
              <StyledH1>{TeamSquad.name}</StyledH1>
              <StyledText>
              {TeamSquad.area && (
              <>
              <StyledCountryLogo src={flags[TeamSquad.area.name]} />
              {TeamSquad.area.name}
              </>
              )}
              </StyledText>
               <StyledLogo src={TeamSquad.crest} ></StyledLogo>
               {Object.keys(squadByPosition).map((position) => (
                 <StyledDiv key={position}>
                   <h3>{position}</h3>
                   <StyledTable>
               <thead>
                 <tr>
                   <th>Name</th>
                   <th>Birth</th>
                   <th>Nationality</th>
                 </tr>
               </thead>
               <tbody>
                 {Array.isArray(TeamSquad.squad)  &&
                   squadByPosition[position].map((player) => {
                     return (
                       <tr key={player.id}>
                         <td>
                           <StyledLink to={`/player/${player.id}`}>{player.name}</StyledLink>
                         </td>
                         <td>{player.dateOfBirth}</td>
                         <td>
     <StyledCountryLogo src={flags[player.nationality]} alt={player.nationality}/>
     {player.nationality}
   </td>
                       </tr>
                     );
                   })}
               </tbody>
             </StyledTable>
                 </StyledDiv>
               ))}
               </>
            )}
            {selectedView === 'upcomingmatches' && <TeamUpcomingMatches/>}
            {selectedView === 'latestmatches' && <TeamLatestMatches/>}
          </>
        )}
      </StyledWrapper>
    </>
  );
};

export default Team;
