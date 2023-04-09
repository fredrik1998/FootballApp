import React, {useState} from 'react'
import {StyledHeader, StyledLink, StyledSeperator, StyledTitle } from './HeaderElements'

const Header = () => {
    const [location, setLocation] = useState(window.location.pathname)
  return (
    <StyledHeader>
        <StyledTitle>FootyFrenzy</StyledTitle>
       {location === '/' ? <StyledLink to='/login'>Sign in</StyledLink> : null} 
    </StyledHeader>
  )
}

export default Header