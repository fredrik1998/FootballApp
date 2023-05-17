import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSerieAUpcommingMatches } from "../../../slice/SerieASlice";
import {
  StyledWrapper,
  StyledTable,
  StyledLink,
  StyledDiv,
} from "./SerieAMatchesElements";
import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router-dom";

const SerieAMatches = () => {
  const dispatch = useDispatch();
  const SerieAUpcommingMatches = useSelector(
    (state) => state.SerieA.upcomingMatches
  );
  const SerieAUpcommingMatchesStatus = useSelector(
    (state) => state.SerieA.upcomingMatchesStatus
  );
  const SerieA = useSelector((state) => state.SerieA.table);
  const navigate = useNavigate();

  useEffect(() => {
    if (SerieAUpcommingMatchesStatus === "idle") {
      dispatch(fetchSerieAUpcommingMatches());
    }
  }, [SerieAUpcommingMatchesStatus, dispatch]);

  const getTeamLogo = (teamName) => {
    for (const team of SerieA) {
      if (team.team.shortName === teamName) {
        return team.team.crest;
      }
    }
    return "";
  };

  const getTeamId = (teamName) => {
    for (const team of SerieA) {
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
    for (const match of SerieAUpcommingMatches) {
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
  }, [SerieAUpcommingMatches]);

  if (SerieAUpcommingMatchesStatus === "loading") {
    return <Loader />;
  }

  return (
    <StyledWrapper>
      {Object.keys(matchesByDate).map((date) => (
        <StyledDiv key={date}>
          <h3>{date}</h3>
          <StyledTable>
            <thead>
              <tr>
                <th>Hometeam</th>
                <th>Time</th>
                <th>AwayTeam</th>
              </tr>
            </thead>
            <tbody>
              {matchesByDate[date].map((match, index) => {
                return (
                  <tr
                    key={index}
                    onClick={(e) => {
                      if (e.target.tagName.toLowerCase() === "a") {
                        return;
                      }
                      navigate(`/match/${match.id}`);
                    }}
                  >
                    <td className="homeTeam">
                      <img
                        src={`${getTeamLogo(match.home_team)}`}
                        width={30}
                        height={30}
                      ></img>
                      <StyledLink to={`/team/${getTeamId(match.home_team)}`}>
                        {match.home_team}
                      </StyledLink>
                    </td>
                    <td className="time">{formatTime(match.kickoff_time)}</td>
                    <td className="awayTeam">
                      <img
                        src={`${getTeamLogo(match.away_team)}`}
                        width={30}
                        height={30}
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
      ))}
    </StyledWrapper>
  );
};

export default SerieAMatches;
