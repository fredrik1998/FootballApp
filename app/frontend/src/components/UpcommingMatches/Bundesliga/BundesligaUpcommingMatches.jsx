import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBundesligaUpcommingMatches } from "../../../slice/BundesligaSlice";
import Loader from "../../Loader/Loader";
import {
  StyledLink,
  StyledTable,
  StyledWrapper,
  StyledDiv,
} from "./BundesligaUpcommingMatchesElements";
import { useNavigate } from "react-router-dom";
const BundesligaUpcommingMatches = () => {
  const dispatch = useDispatch();
  const BundesligaUpcommingMatches = useSelector(
    (state) => state.Bundesliga.upcomingMatches
  );
  const BundesligaUpcommingMatchesStatus = useSelector(
    (state) => state.Bundesliga.upcomingMatchesStatus
  );
  const Bundesliga = useSelector((state) => state.Bundesliga.table);
  const navigate = useNavigate();

  useEffect(() => {
    if (BundesligaUpcommingMatchesStatus === "idle") {
      dispatch(fetchBundesligaUpcommingMatches());
    }
  }, [BundesligaUpcommingMatchesStatus, dispatch]);

  const getTeamLogo = (teamName) => {
    for (const team of Bundesliga) {
      if (team.team.name === teamName) {
        return team.team.crest;
      }
    }
    return "";
  };

  const getTeamId = (teamName) => {
    for (const team of Bundesliga) {
      if (team.team.name === teamName) {
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
    for (const match of BundesligaUpcommingMatches) {
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
  }, [BundesligaUpcommingMatches]);

  if (BundesligaUpcommingMatchesStatus === "loading") {
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
                  <th>Time</th>
                  <th>Awayteam</th>
                </tr>
              </thead>
              <tbody>
                {matchesByDate[date].map((match, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={(e) => {
                        if (e.target.tagName === "a") {
                          return;
                        }
                        navigate(`/match/${match.id}`);
                      }}
                    >
                      <td className="homeTeam">
                        <img
                          src={getTeamLogo(match.home_team)}
                          width={30}
                          alt="home team logo"
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
                          alt="away team logo"
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

export default BundesligaUpcommingMatches;
