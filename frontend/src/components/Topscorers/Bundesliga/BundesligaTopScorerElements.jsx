import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
height: 100%;
width: 100%;
`
export const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
th,td{
    text-align: left;
    padding: 8px;
}
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: #fafafa;
cursor: pointer;
`