import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginscreen from './screens/Loginscreen/Loginscreen';
import Landingscreen from './screens/Landingscreen/Landingscreen'
import RegisterScreen from './screens/Registerscreen/Registerscreen'
import PremierLeague from './screens/PL/PremierLeague';
import CL from './screens/CL/CL';
import Team from './screens/Team/Team';
import SerieA from './screens/SerieA/SerieA';
import Bundesliga from './screens/Bundesliga/Bundesliga';
import Ligue1 from './screens/Ligue1/Ligue1';
import LaLiga from './screens/LaLiga/LaLiga';
import Player from './screens/Player/Player'
import Match from './screens/Match/Match';
import Homescreen from './screens/Homescreen/Homescreen';

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
    <Route path='/BL' element={<Bundesliga/>}/>
    <Route path='/Ligue1' element={<Ligue1/>}/>
    <Route path='/LaLiga' element={<LaLiga/>}/>
    <Route path='/player/:player_id' element={<Player/>}/>
    <Route path='/match/:match_id' element={<Match/>}/>
    <Route path='/homescreen' element={<Homescreen/>}/>
  </Routes>
  )
}

export default App