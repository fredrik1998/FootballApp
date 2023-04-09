import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
margin-top: 2rem;
`
export const StyledTable = styled.table`
width: 80%;
th, td {
text-align: left;
padding-left: 8px;
padding: 10px;
}
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: #fafafa;
cursor: pointer;
`