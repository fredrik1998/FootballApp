import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayerData } from "../../slice/playerSlice";
import Loader from "../../components/Loader/Loader";
import GlobalStyle from "../../GlobalStyles";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import {
  StyledWrapper,
  StyledImage,
  StyledDiv,
  StyledCountryLogo,
  StyledPlayerStats,
  StyledLink,
} from "./PlayerElements";
import { Typography } from "@mui/material";
import axios from "axios";

const Player = () => {
  const dispatch = useDispatch();
  const Player = useSelector((state) => state.Player.data);
  const PlayerStatus = useSelector((state) => state.Player.status);
  const PlayerError = useSelector((state) => state.Player.error);
  const prevPlayerId = useRef(null);
  const { player_id } = useParams();
  const [flags, setFlags] = useState({});

  useEffect(() => {
    if (PlayerStatus === "idle" || player_id !== prevPlayerId.current) {
      prevPlayerId.current = player_id;
      dispatch(fetchPlayerData(player_id));
    }
  }, [dispatch, player_id, PlayerStatus]);

  const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const customFlagUrls = {
    England:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",
    Scotland:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1280px-Flag_of_Scotland.svg.png",
    Wales:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Wales.svg/1280px-Flag_of_Wales.svg.png",
  };

  const fetchFlags = async (nationalities) => {
    const flagUrls = {};
    for (const nationality of nationalities) {
      if (customFlagUrls[nationality]) {
        flagUrls[nationality] = customFlagUrls[nationality];
      } else {
        try {
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${encodeURIComponent(
              nationality
            )}?fullText=true`
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
    const uniqueNationality = Player.nationality;
    fetchFlags([uniqueNationality]);
  }, [Player]);

  return (
    <>
      <GlobalStyle />
      <Header />
      {PlayerStatus === "loading" ? (
        <Loader />
      ) : (
        <StyledWrapper>
          <h1>{Player.name}</h1>
          <div style={{ display: "flex" }}>
            {Player.currentTeam && (
              <>
                <StyledImage src={Player.currentTeam.crest}></StyledImage>
                <StyledLink to={`/team/${Player.currentTeam.id}`}>
                  {Player.currentTeam.name}
                </StyledLink>
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "30px",
              justifyContent: "center",
            }}
          >
            <StyledPlayerStats>
              Country: {Player.nationality}
              <StyledCountryLogo
                src={flags[Player.nationality]}
              ></StyledCountryLogo>
            </StyledPlayerStats>
            <StyledPlayerStats>
              Shirtnumber: {Player.shirtNumber}
            </StyledPlayerStats>
            <StyledPlayerStats>Position: {Player.position}</StyledPlayerStats>
            <StyledPlayerStats>
              Age: {calculateAge(Player.dateOfBirth)}
            </StyledPlayerStats>
          </div>
          <StyledDiv>
            <h2>Competitions:</h2>
            {Player.currentTeam &&
              Array.isArray(Player.currentTeam.runningCompetitions) &&
              Player.currentTeam.runningCompetitions.map((competition) => {
                return (
                  <div key={competition.id}>
                    <h3>{competition.name}</h3>
                    <img
                      src={competition.emblem}
                      width={100}
                      alt={competition.name}
                    />
                  </div>
                );
              })}
          </StyledDiv>
        </StyledWrapper>
      )}
    </>
  );
};

export default Player;
