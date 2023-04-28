import React, { useState, useRef } from 'react';
import {
  StyledHeader,
  StyledLink,
  StyledTitle,
} from './HeaderElements';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = ({ toggleSidebar, isMobile, isOpen }) => {
  const [location] = useState(window.location.pathname);
  const hamburgerMenuRef = useRef();

  return (
    <StyledHeader>
      <StyledTitle to='/homescreen'>FootyFrenzy</StyledTitle>
      {location === '/' ? <StyledLink to='/login'>Sign in</StyledLink> : null}
      {isMobile &&
        (isOpen ? (
          <CloseIcon
          ref={hamburgerMenuRef}
          onClick={() => toggleSidebar(false)}
          style={{ color: '#fff', fontSize: '2.5rem' }}
        />
        ) : (
          <MenuIcon
            ref={hamburgerMenuRef}
            onClick={() => toggleSidebar(true)}
            style={{ color: '#fff', fontSize: '2.5rem'}}
          />
        ))}
    </StyledHeader>
  );
};

export default Header;
