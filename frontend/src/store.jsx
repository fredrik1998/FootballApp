import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slice/userSlice';
import {premierLeagueSlice} from './slice/premierLeagueSlice';
import { championsLeagueSlice } from './slice/championsLeageuSlice';
import { CLTopScorerSlice } from './slice/CLTopScorerSlice';
import { PLTopScorerSlice } from './slice/PLTopScorerSlice';
import { CLUpcommingMatchesSlice } from './slice/CLUpcommingMatchesSlice';
import { PLUpcommingMatchesSlice } from './slice/PLUpcommingMatchesSlice';
import { PLTopAssistSlice } from './slice/PLTopAssistsSlice';
import { CLTopAssistsSlice } from './slice/CLTopAssistsSlice';
import { TeamSquadSlice } from './slice/TeamSquadSlice';
import { LeaguesSlice } from './slice/LeaguesSlice';
import { SerieASlice } from './slice/SerieASlice';
import { SerieATopscorersSlice } from './slice/SerieATopScorersSlice';
import { SerieAUpcommingMatchesSlice } from './slice/SerieAUpcommingMatchesSlice';
import { SerieALatestMatchesSlice } from './slice/SerieALatestMatchesSlice';
import { PLLatestMatchesSlice } from './slice/PLLatestMatchesSlice';
import { CLLatestMatchesSlice } from './slice/CLLatestMatchesSlice';
import { BundesligaSlice } from './slice/BundesligaSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    premierLeague : premierLeagueSlice.reducer,
    championsLeague: championsLeagueSlice.reducer,
    CLTopScorer: CLTopScorerSlice.reducer,
    PLTopScorer: PLTopScorerSlice.reducer,
    CLUpcommingMatches: CLUpcommingMatchesSlice.reducer,
    PLUpcommingMatches: PLUpcommingMatchesSlice.reducer,
    PLTopAssists: PLTopAssistSlice.reducer,
    CLTopAssists: CLTopAssistsSlice.reducer,
    TeamSquad: TeamSquadSlice.reducer,
    Leagues: LeaguesSlice.reducer,
    SerieA: SerieASlice.reducer,
    SerieATopScorer: SerieATopscorersSlice.reducer,
    SerieAUpcommingMatches: SerieAUpcommingMatchesSlice.reducer,
    SerieALatestMatches: SerieALatestMatchesSlice.reducer,
    PLLatestMatches: PLLatestMatchesSlice.reducer,
    CLLatestMatches: CLLatestMatchesSlice.reducer,
    Bundesliga: BundesligaSlice.reducer,
  },
});
