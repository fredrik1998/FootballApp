import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginscreen from './screens/Loginscreen/Loginscreen';
import Landingscreen from './screens/Landingscreen/Landingscreen'
import RegisterScreen from './screens/Registerscreen/Registerscreen'
import Homescreen from './screens/Homescreen/Homescreen';
const App =() => {
  return (
  <Routes>
    <Route path='/' element={<Landingscreen/>}/>
    <Route path='/login' element={<Loginscreen/>}/>
    <Route path='/register' element={<RegisterScreen/>}/>
    <Route path='/homescreen' element={<Homescreen/>}/>
  </Routes>
  )
}

export default App