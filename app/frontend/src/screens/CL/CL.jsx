import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import CLTopScorers from "../../components/Topscorers/CL/CLTopScorers";
import CLMatches from "../../components/UpcommingMatches/CL/CLMatches";
import GlobalStyle from "../../GlobalStyles";
import {
  StyledWrapper,
  GridContainer,
  GridItem,
  StyledLink,
  ContentWrapper,
  StyledTable,
} from "./CLElements";
import { fetchChampionsLeague } from "../../slice/championsLeageuSlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { Tab, Tabs } from "@mui/material";
import Sidebar from "../../components/Sidebar/Sidebar";
import CLLatestMatches from "../../components/LatestMatches/CL/CLLatestMatches";

const CL = () => {
  const dispatch = useDispatch();
  const championsLeague = useSelector((state) => state.championsLeague.table);
  const championsLeagueStatus = useSelector(
    (state) => state.championsLeague.tableStatus
  );
  const [selectedView, setSelectedView] = useState("table");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const hamburgerMenuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (championsLeagueStatus === "idle") {
      dispatch(fetchChampionsLeague());
    }
  }, [championsLeague, dispatch]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const formatGroupName = (groupName) => {
    return groupName.replace(/_/g, " ");
  };

  return (
    <>
      <GlobalStyle />
      <Header
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
        isOpen={isOpen}
      />
      <ContentWrapper>
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          setIsMobile={setIsMobile}
          hamburgerMenuRef={hamburgerMenuRef}
        />
        <StyledWrapper>
          {championsLeagueStatus === "loading" ? (
            <Loader />
          ) : (
            <>
              <Tabs
                value={selectedView}
                onChange={(event, newValue) => setSelectedView(newValue)}
                centered
              >
                <Tab label="Table" value="table" />
                <Tab label="Top Scorers" value="topScorers" />
                <Tab label="Upcoming Matches" value="upcommingMatches" />
                <Tab label="Latest Matches" value="latestmatches"></Tab>
              </Tabs>
              {selectedView === "table" && (
                <GridContainer>
                  {Object.keys(championsLeague).map((groupName) => (
                    <GridItem key={groupName}>
                      <h2>{formatGroupName(groupName)}</h2>
                      <StyledTable>
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
                              <td>
                                <img
                                  style={{ width: "30px" }}
                                  src={team.team.crest}
                                  alt={team.team.name}
                                />
                              </td>
                              <td>
                                <StyledLink to={`/team/${team.team.id}`}>
                                  {team.team.shortName}
                                </StyledLink>
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
                          ))}
                        </tbody>
                      </StyledTable>
                    </GridItem>
                  ))}
                </GridContainer>
              )}
            </>
          )}
          {selectedView === "topScorers" && <CLTopScorers />}
          {selectedView === "upcommingMatches" && <CLMatches />}
          {selectedView === "latestmatches" && <CLLatestMatches />}
        </StyledWrapper>
      </ContentWrapper>
    </>
  );
};

export default CL;
