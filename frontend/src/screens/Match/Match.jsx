import React, { useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchData } from '../../slice/matchesSlice';
import { fetchHead2Head } from '../../slice/Head2HeadSlice';
import Loader from '../../components/Loader/Loader';
import GlobalStyle from '../../GlobalStyles';
import Header from '../../components/Header/Header';
import { useParams, useNavigate } from 'react-router-dom';
import {
  StyledWrapper,
  MatchCard,
  MatchInfo,
  StyledH1,
  MatchDetails,
  StyledP,
  MatchExtraInfo,
  TeamLogo,
  StyledLink,
  Head2HeadCard,
  StyledH2,
  WinsBadge,
  DrawsBadge,
  LossBadge,
  Head2HeadText,
  StyledTable,
  TeamLink,
  StyledDiv
} from './MatchElements';
import { Stadium, Sports, CalendarToday } from '@mui/icons-material'

const Match = () => {
  const dispatch = useDispatch();
  const Match = useSelector((state) => state.Match.data);
  const MatchStatus = useSelector((state) => state.Match.status);
  const Head2Head = useSelector((state) => state.Head2Head.data);
  const Head2HeadStatus = useSelector((state) => state.Head2Head.status);
  const prevMatchId = useRef(null);
  const { match_id } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (MatchStatus === 'idle' && Head2HeadStatus === 'idle' || match_id !== prevMatchId.current) {
      prevMatchId.current = match_id;
      dispatch(fetchMatchData(match_id));
      dispatch(fetchHead2Head(match_id))
    }
  }, [dispatch, MatchStatus, Head2HeadStatus, match_id]);

  if (MatchStatus === 'loading' || Head2HeadStatus === 'loading') {
    return <Loader />;
  }

  const formatDate = () => {
    const date = new Date(Match.utcDate);
    const formattedDate = date.toLocaleDateString('en-GB', {day: '2-digit', month: 'long', year: 'numeric'})
    return formattedDate
  }

  const formatMatchStage = (stage) => {
    switch (stage) {
      case 'LAST_16':
        return 'Last 16'  
      case 'QUARTER_FINALS':
        return 'QF';
      case 'SEMI_FINALS':
        return 'SF';
      case 'FINAL':
        return 'F';
      default:
        return stage;
    }
  };

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
                src={Match.competition.emblem}
                alt="Competition emblem"
              ></img>
              <StyledH1>
              {Match.competition.name} 
              {Match.matchday ? (
                <span> Round {Match.matchday}</span>
              ) : (
                null
              )}
            </StyledH1>
            </MatchInfo>
            <MatchDetails>
              <TeamLogo src={Match.homeTeam.crest}></TeamLogo>
              <StyledLink to={`/team/${Match.homeTeam.id}`}>{Match.homeTeam.shortName}</StyledLink>
              <StyledP>{Match.score.fullTime.home}</StyledP>
              <StyledP>-</StyledP>
              <StyledP>{Match.score.fullTime.away}</StyledP>
              <TeamLogo src={Match.awayTeam.crest}></TeamLogo>
              <StyledLink to={`/team/${Match.awayTeam.id}`}>{Match.awayTeam.shortName}</StyledLink>
            </MatchDetails>
            <MatchExtraInfo>
              <p><CalendarToday/>{formatDate(Match.utcDate)}</p>
              <p><Stadium/>{Match.venue}</p>
              {Match.referees.map((referee) => (
                <p><Sports/>{referee.name}</p>
              ))}
            </MatchExtraInfo>
          </MatchCard>
         <StyledH2>Head-to-Head</StyledH2>
         <Head2HeadCard>
         <TeamLogo src={Match.homeTeam.crest}></TeamLogo>
         <WinsBadge>
         <Head2HeadText>{Head2Head.aggregates.homeTeam.wins}</Head2HeadText>
         <strong>Wins</strong>
         </WinsBadge>
         <DrawsBadge>
         <Head2HeadText>{Head2Head.aggregates.homeTeam.draws}</Head2HeadText>
         <strong>Draws</strong>
         </DrawsBadge>
         <LossBadge>
         <Head2HeadText>{Head2Head.aggregates.homeTeam.losses}</Head2HeadText>
         <strong>Wins</strong>
         </LossBadge>
         <TeamLogo src={Match.awayTeam.crest}></TeamLogo>
         </Head2HeadCard>
         <StyledTable>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Head2Head.matches.map((match) => (
              <tr key={match.id} onClick={(e) => {
                if(e.target.tagName.toLowerCase() === 'a'){
                  return;
                }
                navigate(`/match/${match.id}`)
              }}>
                <td>
                  <img width={30} src={match.homeTeam.crest}></img>
                  <TeamLink to={`/team/${match.homeTeam.id}`}>{match.homeTeam.shortName}</TeamLink>
                </td>
                <td>{match.score.fullTime.home}</td>
                <td>-</td>
                <td>{match.score.fullTime.away}</td>
                <td>
                  <img width={30} src={match.awayTeam.crest}></img>
                  <TeamLink to={`/team/${match.awayTeam.id}`}>{match.awayTeam.shortName}</TeamLink>
                </td>
              </tr>
            ))}
          </tbody>
         </StyledTable>
        </StyledWrapper>
      )}
    </>
  );
};

export default Match;
