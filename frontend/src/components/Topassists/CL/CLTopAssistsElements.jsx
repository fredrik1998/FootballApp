import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`
export const StyledTable = styled.table`
width: 80%;
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