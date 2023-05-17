import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSerieALatestMatches } from "../../../slice/SerieASlice";
import Loader from "../../Loader/Loader";
import {
  StyledWrapper,
  StyledTable,
  StyledLink,
  StyledDiv,
} from "./SerieALatestMatchesElements";
import { useNavigate } from "react-router-dom";

const SerieALatestMatches = () => {
  const dispatch = useDispatch();
  const serieALatestMatches = useSelector(
    (state) => state.SerieA.latestMatches
  );
  const serieALatestMatchesStatus = useSelector(
    (state) => state.SerieA.latestMatchesStatus
  );
  const serieA = useSelector((state) => state.SerieA.table);
  const navigate = useNavigate();
  useEffect(() => {
    if (serieALatestMatchesStatus === "idle") {
      dispatch(fetchSerieALatestMatches());
    }
  }, [serieALatestMatchesStatus, dispatch]);

  const getTeamId = (teamName) => {
    for (const team of serieA) {
      if (team.team.shortName === teamName) {
        return team.team.id;
      }
    }
    return "";
  };

  const getTeamLogo = (teamName) => {
    for (const team of serieA) {
      if (team.team.shortName === teamName) {
        return team.team.crest;
      }
    }
    return "";
  };

  const matchesByDate = useMemo(() => {
    const matches = {};
    for (const match of serieALatestMatches) {
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
  }, [serieALatestMatches]);

  if (serieALatestMatchesStatus === "loading") {
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
                <th></th>
                <th></th>
                <th></th>
                <th>Awayteam</th>
              </tr>
            </thead>
            <tbody>
              {matchesByDate[date].map((match, index) => (
                <tr
                  key={index}
                  onClick={(e) => {
                    if (e.target.tagName.toLowerCase() === "a") {
                      return;
                    }
                    navigate(`/match/${match.id}`);
                  }}
                >
                  <td>
                    <img
                      src={`${getTeamLogo(match.home_team)}`}
                      width={30}
                      height={30}
                      alt="team logo"
                    />
                    <StyledLink to={`/team/${getTeamId(match.home_team)}`}>
                      {match.home_team}
                    </StyledLink>
                  </td>
                  <td>{match.home_team_score}</td>
                  <td>-</td>
                  <td>{match.away_team_score}</td>
                  <td>
                    <img
                      src={`${getTeamLogo(match.away_team)}`}
                      width={30}
                      height={30}
                      alt="team logo"
                    />
                    <StyledLink to={`/team/${getTeamId(match.away_team)}`}>
                      {match.away_team}
                    </StyledLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledDiv>
      ))}
    </StyledWrapper>
  );
};

export default SerieALatestMatches;
