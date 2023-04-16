import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginscreen from './screens/Loginscreen/Loginscreen';
import Landingscreen from './screens/Landingscreen/Landingscreen'
import RegisterScreen from './screens/Registerscreen/Registerscreen'
import Homescreen from './screens/Homescreen/Homescreen';
import CL from './screens/CL/CL';
import Team from './screens/Team/Team';
import SerieA from './screens/SerieA/SerieA';
import Bundesliga from './screens/Bundesliga/Bundesliga';
import Ligue1 from './screens/Ligue1/Ligue1';
const App =() => {
  return (
  <Routes>
    <Route path='/' element={<Landingscreen/>}/>
    <Route path='/login' element={<Loginscreen/>}/>
    <Route path='/register' element={<RegisterScreen/>}/>
    <Route path='/homescreen' element={<Homescreen/>}/>
    <Route path='/CL' element={<CL/>}/>
    <Route path='/team/:team_id' element={<Team/>}></Route>
    <Route path='/SA' element={<SerieA/>}/>
    <Route path='/BL' element={<Bundesliga/>}/>
    <Route path='/Ligue1' element={<Ligue1/>}/>
  </Routes>
  )
}

export default App