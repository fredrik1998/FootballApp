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
    TeamSquad: TeamSquadSlice.reducer
  },
});
