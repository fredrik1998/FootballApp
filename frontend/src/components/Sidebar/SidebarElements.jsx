import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
display: none;
@media (min-width: 768px){
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
height: 100vh;
padding-left: 20px;
padding-top: 100px;
gap: 50px;
}
&.expanded {
    @media (max-width: 767px) {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      padding-left: 20px;
      padding-top: 100px;
      width: 250px;
      gap: 50px;
      background-color: rgba(0, 0, 0, 0.9);
      z-index: 10;
    }
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
color: #fafafa;
`

export const StyledImage = styled.img`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 30px;
height: 30px;
`
export const StyledSidebar = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 300px;
background-color: #0F1B2D;
position: absolute;
z-index: 1;
`
export const StyledButton = styled.button`
background: none;

`