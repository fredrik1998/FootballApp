import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slice/userSlice';
import {premierLeagueSlice} from './slice/premierLeagueSlice';
import { championsLeagueSlice } from './slice/championsLeageuSlice';
import { TeamSquadSlice } from './slice/TeamSquadSlice';
import { LeaguesSlice } from './slice/LeaguesSlice';
import { SerieASlice } from './slice/SerieASlice';
import { BundesligaSlice } from './slice/BundesligaSlice';
import { Ligue1Slice } from './slice/Ligue1Slice';
import { LaLigaSlice } from './slice/LaLigaSlice';
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    premierLeague : premierLeagueSlice.reducer,
    championsLeague: championsLeagueSlice.reducer,
    TeamSquad: TeamSquadSlice.reducer,
    Leagues: LeaguesSlice.reducer,
    SerieA: SerieASlice.reducer,
    Bundesliga: BundesligaSlice.reducer,
    Ligue1: Ligue1Slice.reducer,
    LaLiga: LaLigaSlice.reducer,
  },
});
