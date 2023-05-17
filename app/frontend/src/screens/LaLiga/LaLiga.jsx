import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchLaLiga } from "../../slice/LaLigaSlice";
import Loader from "../../components/Loader/Loader";
import {
  ContentWrapper,
  StyledLink,
  StyledTable,
  StyledWrapper,
} from "./LaLigaElements";
import GlobalStyle from "../../GlobalStyles";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Fab, Tab, Tabs } from "@mui/material";
import LaLigaTopScorers from "../../components/Topscorers/LaLiga/LaLigaTopScorers";
import LaLigaTopAssists from "../../components/Topassists/LaLiga/LaLigaTopAssists";
import LaLigaUpcomingMatches from "../../components/UpcommingMatches/LaLiga/LaLigaUpcomingMatches";
import LaLigaLatestMatches from "../../components/LatestMatches/LaLiga/LaLigaLatestMatches";

const LaLiga = () => {
  const dispatch = useDispatch();
  const LaLiga = useSelector((state) => state.LaLiga.table);
  const LaLigaStatus = useSelector((state) => state.LaLiga.tableStatus);
  const [selectedView, setSelectedView] = useState("table");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const hamburgerMenuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (LaLigaStatus === "idle") {
      dispatch(fetchLaLiga());
    }
  }, [dispatch, LaLigaStatus]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const getTeamId = (teamName) => {
    for (const team of LaLiga) {
      if (team.team.name === teamName) {
        return team.team.id;
      }
    }
    return "";
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
          toggleSidebar={toggleSidebar}
          isOpen={isOpen}
          setIsMobile={setIsMobile}
          hamburgerMenuRef={hamburgerMenuRef}
        />
        <StyledWrapper>
          {LaLigaStatus === "loading" ? (
            <Loader />
          ) : (
            <>
              <Tabs
                value={selectedView}
                onChange={(event, newValue) => setSelectedView(newValue)}
              >
                <Tab label="table" value="table"></Tab>
                <Tab label="Top scorers" value="topscorers"></Tab>
                <Tab label="Upcoming Matches" value="upcomingmatches"></Tab>
                <Tab label="Latest matches" value="latestmatches"></Tab>
              </Tabs>
              {selectedView === "table" && (
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
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {LaLiga.map((team) => {
                      return (
                        <tr key={team.position}>
                          <th>{team.position}</th>

                          <img
                            style={{ width: "30px", marginTop: "12px" }}
                            src={team.team.crest}
                            alt={team.team.name}
                          />
                          <td>
                            <StyledLink
                              to={`/team/${getTeamId(team.team.name)}`}
                            >
                              {team.team.name}
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
                      );
                    })}
                  </tbody>
                </StyledTable>
              )}
            </>
          )}
          {selectedView === "topscorers" && <LaLigaTopScorers />}
          {selectedView === "upcomingmatches" && <LaLigaUpcomingMatches />}
          {selectedView === "latestmatches" && <LaLigaLatestMatches />}
        </StyledWrapper>
      </ContentWrapper>
    </>
  );
};

export default LaLiga;
