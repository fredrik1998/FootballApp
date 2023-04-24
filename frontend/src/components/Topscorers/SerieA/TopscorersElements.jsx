import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`
export const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
th, td {
    text-align: left;
    padding: 8px;
}
`

export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`