import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  td,
  th {
    text-align: left;
    padding: 8px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;
