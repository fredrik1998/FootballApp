import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLaLigaUpcomingMatches } from "../../../slice/LaLigaSlice";
import Loader from "../../Loader/Loader";
import {
  StyledDiv,
  StyledLink,
  StyledTable,
  StyledWrapper,
} from "./LaLigaUpcomingMatchesElements";
import { useNavigate } from "react-router-dom";

const LaLigaUpcomingMatches = () => {
  const dispatch = useDispatch();
  const LaLiga = useSelector((state) => state.LaLiga.table);
  const LaLigaUpcomingMatches = useSelector(
    (state) => state.LaLiga.upcomingMatches
  );
  const LaLigaUpcomingMatchesStatus = useSelector(
    (state) => state.LaLiga.upcomingMatchesStatus
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (LaLigaUpcomingMatchesStatus === "idle") {
      dispatch(fetchLaLigaUpcomingMatches());
    }
  }, [LaLigaUpcomingMatchesStatus, dispatch]);

  const getTeamLogo = (teamName) => {
    for (const team of LaLiga) {
      if (team.team.shortName === teamName) {
        return team.team.crest;
      }
    }
    return "";
  };

  const getTeamId = (teamName) => {
    for (const team of LaLiga) {
      if (team.team.shortName === teamName) {
        return team.team.id;
      }
    }
    return "";
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };

  const matchesByDate = useMemo(() => {
    const matches = {};
    for (const match of LaLigaUpcomingMatches) {
      const date = new Date(match.kickoff_time);
      const formattedDate = date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      if (!matches[formattedDate]) {
        matches[formattedDate] = [];
      }
      matches[formattedDate].push(match);
    }
    return matches;
  }, [LaLigaUpcomingMatches]);

  if (LaLigaUpcomingMatchesStatus === "loading") {
    return <Loader />;
  }

  return (
    <StyledWrapper>
      {Object.keys(matchesByDate).map((date) => {
        return (
          <StyledDiv key={date}>
            <h3>{date}</h3>
            <StyledTable>
              <thead>
                <tr>
                  <th>Hometeam</th>
                  <th></th>
                  <th>Awayteam</th>
                </tr>
              </thead>
              <tbody>
                {matchesByDate[date].map((match) => {
                  return (
                    <tr
                      key={match.id}
                      onClick={(e) => {
                        if (e.target.tagName.toLowerCase() === "a") {
                          return "";
                        }
                        navigate(`/match/${match.id}`);
                      }}
                    >
                      <td className="homeTeam">
                        <img
                          src={getTeamLogo(match.home_team)}
                          width={30}
                        ></img>
                        <StyledLink to={`/team/${getTeamId(match.home_team)}`}>
                          {match.home_team}
                        </StyledLink>
                      </td>
                      <td className="time">{formatTime(match.kickoff_time)}</td>
                      <td className="awayTeam">
                        <img
                          src={getTeamLogo(match.away_team)}
                          width={30}
                        ></img>
                        <StyledLink to={`/team/${getTeamId(match.away_team)}`}>
                          {match.away_team}
                        </StyledLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </StyledTable>
          </StyledDiv>
        );
      })}
    </StyledWrapper>
  );
};

export default LaLigaUpcomingMatches;
