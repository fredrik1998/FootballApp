import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLigue1UpcommingMatches } from "../../../slice/Ligue1Slice";
import Loader from "../../Loader/Loader";
import {
  StyledDiv,
  StyledLink,
  StyledTable,
  StyledWrapper,
} from "./Ligue1UpcommingMatchesElements";
import { useNavigate } from "react-router-dom";

const Ligue1UpcommingMatches = () => {
  const dispatch = useDispatch();
  const Ligue1 = useSelector((state) => state.Ligue1.table);
  const Ligue1UpcommingMatches = useSelector(
    (state) => state.Ligue1.upcomingMatches
  );
  const Ligue1UpcommingMatchesStatus = useSelector(
    (state) => state.Ligue1.upcomingMatchesStatus
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (Ligue1UpcommingMatchesStatus === "idle") {
      dispatch(fetchLigue1UpcommingMatches());
    }
  }, [dispatch, Ligue1UpcommingMatchesStatus]);

  const getTeamId = (teamName) => {
    for (const team of Ligue1) {
      if (team.team.shortName === teamName) {
        return team.team.id;
      }
    }
    return "";
  };

  const getTeamLogo = (teamName) => {
    for (const team of Ligue1) {
      if (team.team.shortName === teamName) {
        return team.team.crest;
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
    for (const match of Ligue1UpcommingMatches) {
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
  }, [Ligue1UpcommingMatches]);

  if (Ligue1UpcommingMatchesStatus === "loading") {
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
                        if (e.target.tagName.toLowerCase() === "a") {
                          return;
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

export default Ligue1UpcommingMatches;
