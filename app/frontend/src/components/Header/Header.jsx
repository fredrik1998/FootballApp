import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  StyledHeader,
  StyledLink,
  StyledTitle,
  StyledLogo,
  StyledH3,
  StyledDiv,
} from "./HeaderElements";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import icon from "../../images/footballicon.png";
import IconButton from "@mui/material/IconButton";
import { ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";

export const CustomInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#f7f7f7",
  width: "100%",
  maxWidth: "365px",
  borderRadius: 18,
  padding: "5px",
  border: "1px solid #e0e0e0",
  marginTop: "20px",
  fontSize: "1rem",
  color: "#333",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  "&:focus": {
    outline: "none",
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
  },
}));

const Header = ({ toggleSidebar, isMobile, isOpen }) => {
  const searchResultsBoxStyle = {
    display: "flex",
    width: "100%",
    maxWidth: "365px",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    zIndex: 2,
  };

  const searchResultItemStyle = {
    padding: "8px 12px",
    cursor: "pointer",
    color: "#000",
  };

  const [location] = useState(window.location.pathname);
  const hamburgerMenuRef = useRef();
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [leagueResponse, teamResponse, playerResponse] = await Promise.all([
        axios.get("/api/leagues/"),
        axios.get("/api/teams/"),
      ]);
      setLeagues(leagueResponse.data.competitions);
      setTeams(teamResponse.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    searchForInfo(event.target.value);
  };

  const searchForInfo = (query) => {
    if (query === "") {
      setSearchResults([]);
    } else {
      if (Array.isArray(leagues) && Array.isArray(teams)) {
        const leagueResults = leagues
          .filter(
            (league) =>
              league.name &&
              league.name.toLowerCase().includes(query.toLowerCase())
          )
          .sort((a, b) => a.name.localeCompare(b.name));

        const teamResults = teams
          .filter(
            (team) =>
              team.name && team.name.toLowerCase().includes(query.toLowerCase())
          )
          .sort((a, b) => a.name.localeCompare(b.name));

        setSearchResults([
          {
            type: "League",
            results: leagueResults,
          },
          {
            type: "Team",
            results: teamResults,
          },
        ]);
      } else {
        console.error("Leagues or teams data is not an array:", leagues, teams);
      }
    }
  };

  const handleClickAway = () => {
    setIsFocused(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <StyledHeader>
      <StyledTitle to="/">
        <img width={30} src={icon}></img>FootyFrenzy
      </StyledTitle>

      <div style={{ position: "relative" }}>
        <IconButton
          type="button"
          sx={{ marginTop: "15px", color: "#fff" }}
          aria-label="search"
          onClick={handleFocus}
        >
          <SearchIcon />
        </IconButton>
        <Modal
          open={isFocused}
          disableScrollLock
          onClose={handleClickAway}
          aria-labelledby="search-modal"
          aria-describedby="search-modal-description"
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomInputBase
              type="text"
              placeholder="League, Team"
              value={searchQuery}
              onChange={handleSearchInputChange}
              autoFocus
              startAdornment={
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              }
            />

            {searchResults.length > 0 && (
              <div style={searchResultsBoxStyle}>
                {searchResults.map(
                  (group, index) =>
                    group.results.length > 0 && (
                      <div key={index}>
                        <StyledH3>{group.type}</StyledH3>
                        {group.results.map((result, index) => (
                          <div key={index} style={searchResultItemStyle}>
                            {result.area ? (
                              <StyledDiv>
                                <StyledLogo
                                  width={30}
                                  src={result.area.flag}
                                ></StyledLogo>
                                <StyledLink
                                  to={`/${result.code}`}
                                  onClick={() => setSearchResults([])}
                                >
                                  {result.name}
                                </StyledLink>
                              </StyledDiv>
                            ) : (
                              <StyledDiv>
                                <StyledLogo
                                  width={30}
                                  src={result.crest}
                                ></StyledLogo>
                                <StyledLink
                                  to={`/team/${result.id}`}
                                  onClick={() => setSearchResults([])}
                                >
                                  {result.name}
                                </StyledLink>
                              </StyledDiv>
                            )}
                          </div>
                        ))}
                      </div>
                    )
                )}
              </div>
            )}
          </Box>
        </Modal>
      </div>
      {isMobile &&
        (isOpen ? (
          <CloseIcon
            ref={hamburgerMenuRef}
            onClick={() => toggleSidebar(false)}
            style={{ color: "#fff", fontSize: "2.5rem", marginTop: "20px" }}
          />
        ) : (
          <MenuIcon
            ref={hamburgerMenuRef}
            onClick={() => toggleSidebar(true)}
            style={{ color: "#fff", fontSize: "2.5rem", marginTop: "20px" }}
          />
        ))}
    </StyledHeader>
  );
};

export default Header;
