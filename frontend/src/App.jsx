import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Loginscreen from './screens/Loginscreen/Loginscreen';
import Landingscreen from './screens/Landingscreen/Landingscreen'
import RegisterScreen from './screens/Registerscreen/Registerscreen'
const App =() => {
  return (
  <Routes>
    <Route path='/' element={<Landingscreen/>}/>
    <Route path='/login' element={<Loginscreen/>}/>
    <Route path='/register' element={<RegisterScreen/>}/>
  </Routes>
  )
}

export default App