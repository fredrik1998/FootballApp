import React, { Suspense, lazy, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/Loader/Loader';

const Loginscreen = lazy(() => import('./screens/Loginscreen/Loginscreen'));
const Landingscreen = lazy(() => import( './screens/Landingscreen/Landingscreen'));
const RegisterScreen = lazy(() => import('./screens/Registerscreen/Registerscreen'));
const PremierLeague = lazy(() => import('./screens/PL/PremierLeague'));
const CL = lazy(() => import('./screens/CL/CL'));
const Team = lazy(() => import('./screens/Team/Team'));
const SerieA = lazy(() => import('./screens/SerieA/SerieA'));
const Bundesliga = lazy(() => import('./screens/Bundesliga/Bundesliga'));
const Ligue1 = lazy(() => import('./screens/Ligue1/Ligue1'));
const LaLiga = lazy(() => import('./screens/LaLiga/LaLiga'));
const Player = lazy(() => import('./screens/Player/Player'));
const Match = lazy(() => import('./screens/Match/Match'));
const Homescreen = lazy(() => import('./screens/Homescreen/Homescreen'));

const App =() => {
  return (
  <Routes>
    <Route path='/' element={<Landingscreen/>}/>
    <Route path='/login' element={<Loginscreen/>}/>
    <Route path='/register' element={<RegisterScreen/>}/>
    <Route path='/PL' element={<PremierLeague/>}/>
    <Route path='/CL' element={<CL/>}/>
    <Route path='/team/:team_id' element={<Team/>}/>
    <Route path='/SA' element={<SerieA/>}/>
    <Route path='/BL1' element={<Bundesliga/>}/>
    <Route path='/FL1' element={<Ligue1/>}/>
    <Route path='/PD' element={<LaLiga/>}/>
    <Route path='/player/:player_id' element={<Player/>}/>
    <Route path='/match/:match_id' element={<Match/>}/>
    <Route path='/homescreen' element={<Homescreen/>}/>
  </Routes>
  )
}

export default function AppWrapper() {
  return(
  <Suspense fallback={<Loader/>}>
    <App/>
  </Suspense>
  );
}
