import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homescreen from './screens/Landingscreen/Landingscreen'
import GlobalStyle from './GlobalStyles'
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
