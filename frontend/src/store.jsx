import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slice/userSlice';
import {premierLeagueSlice} from './slice/premierLeagueSlice';
import { championsLeagueSlice } from './slice/championsLeageuSlice';
import { CLTopScorerSlice } from './slice/CLTopScorerSlice';
import { PLTopScorerSlice } from './slice/PLTopScorerSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    premierLeague : premierLeagueSlice.reducer,
    championsLeague: championsLeagueSlice.reducer,
    CLTopScorer: CLTopScorerSlice.reducer,
    PLTopScorer: PLTopScorerSlice.reducer,
  },
});
