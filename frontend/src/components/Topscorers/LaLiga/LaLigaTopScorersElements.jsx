import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.main`
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

  th:nth-child(1), td:nth-child(1) {
    width: 40%;
  }

  th:nth-child(2), td:nth-child(2) {
    width: 40%;
  }

  th:nth-child(3), td:nth-child(3) {
    width: 20%;
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`
