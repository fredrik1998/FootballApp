import React, {useState, useRef} from 'react'
import {StyledHeader, StyledLink, StyledSeperator, StyledTitle } from './HeaderElements'
import MenuIcon from '@mui/icons-material/Menu';
import { StyledButton } from '../Sidebar/SidebarElements';

const Header = ({toggleSidebar, isMobile}) => {
    const [location, setLocation] = useState(window.location.pathname)
    const hamburgerMenuRef = useRef()


  return (
    <StyledHeader>
        <StyledTitle>FootyFrenzy</StyledTitle>
       {location === '/' ? <StyledLink to='/login'>Sign in</StyledLink> : null}
       {isMobile && (
        <StyledButton ref={hamburgerMenuRef} onClick={() => toggleSidebar(true)}>
          <MenuIcon style={{ color: '#fff' }} />
        </StyledButton>
      )}
      
    </StyledHeader>
  )
}

export default Header