import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginscreen from './screens/Loginscreen/Loginscreen';
import Landingscreen from './screens/Landingscreen/Landingscreen'
import RegisterScreen from './screens/Registerscreen/Registerscreen'
import Homescreen from './screens/Homescreen/Homescreen';
import CL from './screens/CL/CL';
import Team from './screens/Team/Team';
const App =() => {
  const [crestUrls, setCrestUrls] = useState()
  return (
  <Routes>
    <Route path='/' element={<Landingscreen/>}/>
    <Route path='/login' element={<Loginscreen/>}/>
    <Route path='/register' element={<RegisterScreen/>}/>
    <Route path='/homescreen' element={<Homescreen/>}/>
    <Route path='/CL' element={<CL/>}/>
    <Route path='/team/:team_id' element={<Team/>}></Route>
  </Routes>
  )
}

export default App