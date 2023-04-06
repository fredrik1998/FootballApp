import React from 'react'
import { StyledLink, StyledNav} from './SidebarElements'

const Sidebar = () => {
  return (
    <StyledNav>
      <StyledLink>Premier League</StyledLink>
      <StyledLink to='/CL'>Champions League</StyledLink>
      <StyledLink>Serie A</StyledLink>
      <StyledLink>Bundesliga</StyledLink>
      <StyledLink></StyledLink>
    </StyledNav>
  )
}

export default Sidebar