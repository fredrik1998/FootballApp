import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { premierLeagueSlice } from "./slice/premierLeagueSlice";
import { championsLeagueSlice } from "./slice/championsLeageuSlice";
import { TeamSquadSlice } from "./slice/TeamSquadSlice";
import { LeaguesSlice } from "./slice/LeaguesSlice";
import { SerieASlice } from "./slice/SerieASlice";
import { BundesligaSlice } from "./slice/BundesligaSlice";
import { Ligue1Slice } from "./slice/Ligue1Slice";
import { LaLigaSlice } from "./slice/LaLigaSlice";
import { playerSlice } from "./slice/playerSlice";
import { matchSlice } from "./slice/matchesSlice";
import { TodaysMatchesSlice } from "./slice/todaysMatchesSlice";
import { TeamUpcomingMatchesSlice } from "./slice/TeamUpcomingMatchesSlice";
import { TeamLatestMatchesSlice } from "./slice/TeamLatestMatchesSlice";
import { Head2HeadSlice } from "./slice/Head2HeadSlice";
export default configureStore({
  reducer: {
    user: userSlice.reducer,
    premierLeague: premierLeagueSlice.reducer,
    championsLeague: championsLeagueSlice.reducer,
    TeamSquad: TeamSquadSlice.reducer,
    Player: playerSlice.reducer,
    Leagues: LeaguesSlice.reducer,
    Match: matchSlice.reducer,
    SerieA: SerieASlice.reducer,
    Bundesliga: BundesligaSlice.reducer,
    Ligue1: Ligue1Slice.reducer,
    LaLiga: LaLigaSlice.reducer,
    TodaysMatches: TodaysMatchesSlice.reducer,
    TeamUpcomingMatches: TeamUpcomingMatchesSlice.reducer,
    TeamLatestMatches: TeamLatestMatchesSlice.reducer,
    Head2Head: Head2HeadSlice.reducer,
  },
});
