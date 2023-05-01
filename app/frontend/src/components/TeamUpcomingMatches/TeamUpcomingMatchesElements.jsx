import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
`;

export const StyledDiv = styled.div`
 width: 100%;
margin: 1rem auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #fafafa;
  }

  th {
    background-color: #f2f2f2;
  }

  td:nth-child(2), td:nth-child(3) {
    width: 40%;
  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`
