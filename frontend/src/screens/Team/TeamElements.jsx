import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`
export const StyledTable = styled.table`
height: 80%;
border-collapse: collapse;
th, td {
    text-align: left;
    padding: 8px;
}
`
export const StyledH1 = styled.h1`
padding-left: 2rem;
`
export const StyledLogo = styled.img`
display: flex;
align-self: flex-start;
padding-left: 2rem;
width: 150px;
height: 150px;
@media screen and (max-width: 767px){
 display: flex;
 align-self: center;
}
`
export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`