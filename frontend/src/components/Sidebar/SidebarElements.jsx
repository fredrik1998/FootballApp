import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 20px;
`
export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
color: #fafafa;
`