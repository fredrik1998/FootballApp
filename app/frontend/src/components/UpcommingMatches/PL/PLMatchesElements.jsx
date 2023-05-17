import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 80%;
  gap: 20px;
`;

export const StyledDiv = styled.div`
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;

  tr {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  td.homeTeam {
    flex: 1;
    text-align: left;
  }

  td.time {
    flex: 1;
    text-align: center;
  }

  td.awayTeam {
    flex: 1;
    text-align: right;
  }

  tr:hover {
    box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.3);
  }

  tr td {
    position: relative;
    z-index: 1;
  }

  th,
  td {
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;
