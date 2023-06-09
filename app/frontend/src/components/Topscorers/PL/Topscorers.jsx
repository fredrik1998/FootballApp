import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopScorerPL } from "../../../slice/premierLeagueSlice";
import Loader from "../../Loader/Loader";
import { StyledWrapper, StyledTable, StyledLink } from "./TopScorerElements";

const TopScorers = () => {
  const dispatch = useDispatch();
  const PLTopScorer = useSelector((state) => state.premierLeague.topScorers);
  const PLTopScorerStatus = useSelector(
    (state) => state.premierLeague.topScorersStatus
  );
  const premierLeague = useSelector((state) => state.premierLeague.table);

  useEffect(() => {
    if (PLTopScorerStatus === "idle") {
      dispatch(fetchTopScorerPL());
    }
  }, [PLTopScorerStatus, dispatch]);

  const getTeamLogo = (teamName) => {
    for (const team of premierLeague) {
      if (team.team.shortName === teamName) {
        return team.team.crest;
      }
    }
    return "";
  };

  const getTeamId = (teamName) => {
    for (const team of premierLeague) {
      if (team.team.name === teamName) {
        return team.team.id;
      }
    }
    return "";
  };

  return (
    <>
      {PLTopScorerStatus === "loading" ? (
        <Loader />
      ) : (
        <StyledWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Player</th>
                <th>Team</th>
                <th>Goals</th>
              </tr>
            </thead>
            <tbody>
              {PLTopScorer.map((player) => (
                <tr key={player.id}>
                  <td>
                    <StyledLink to={`/player/${player.id}`}>
                      {player.name}
                    </StyledLink>
                  </td>
                  <td>
                    <img
                      src={getTeamLogo(player.team)}
                      alt={player.team}
                      width={30}
                    ></img>
                    <StyledLink to={`/team/${getTeamId(player.team)}`}>
                      {player.team}
                    </StyledLink>
                  </td>
                  <td>{player.goals}</td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledWrapper>
      )}
    </>
  );
};

export default TopScorers;
