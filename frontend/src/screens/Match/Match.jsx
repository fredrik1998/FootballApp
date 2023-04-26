import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchData } from '../../slice/matchesSlice';
import Loader from '../../components/Loader/Loader';
import GlobalStyle from '../../GlobalStyles';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import {
  StyledWrapper,
  MatchCard,
  MatchInfo,
  StyledH1,
  MatchDetails,
  StyledH2,
  StyledP,
  MatchExtraInfo
} from './MatchElements';
import { Stadium, Sports, CalendarToday } from '@mui/icons-material'

const Match = () => {
  const dispatch = useDispatch();
  const Match = useSelector((state) => state.Match.data);
  const MatchStatus = useSelector((state) => state.Match.status);
  const MatchError = useSelector((state) => state.Match.error);
  const prevMatchId = useRef(null);
  const { match_id } = useParams();
  
  useEffect(() => {
    if (MatchStatus === 'idle' || match_id !== prevMatchId.current) {
      prevMatchId.current = match_id;
      dispatch(fetchMatchData(match_id));
    }
  }, [dispatch, MatchStatus, match_id]);

  if (MatchStatus === 'loading') {
    return <Loader />;
  }

  const formatDate = () => {
    const date = new Date(Match.utcDate);
    const formattedDate = date.toLocaleDateString('en-GB', {weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'})
    return formattedDate
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      {Match && Match.competition && (
        <StyledWrapper>
          <MatchCard>
            <MatchInfo>
              <img
                width={30}
                height={30}
                style={{marginTop: '10px'}}
                src={Match.competition.emblem}
                alt="Competition emblem"
              ></img>
              <StyledH1>
                {Match.competition.name} Round {Match.matchday}
              </StyledH1>
            </MatchInfo>
            <MatchDetails>
              <img width={100} height={100} src={Match.homeTeam.crest}></img>
              <StyledH2>{Match.homeTeam.name}</StyledH2>
              <StyledP>{Match.score.fullTime.home}</StyledP>
              <StyledP>-</StyledP>
              <StyledP>{Match.score.fullTime.away}</StyledP>
              <img width={100} height={100} src={Match.awayTeam.crest}></img>
              <StyledH2>{Match.awayTeam.name}</StyledH2>
            </MatchDetails>
            <MatchExtraInfo>
              <p><CalendarToday/>{formatDate(Match.utcDate)}</p>
              <p><Stadium/>{Match.venue}</p>
              {Match.referees.map((referee) => (
                <p><Sports/>{referee.name}</p>
              ))}
            </MatchExtraInfo>
          </MatchCard>
        </StyledWrapper>
      )}
    </>
  );
};

export default Match;
