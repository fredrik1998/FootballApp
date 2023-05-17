import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentWrapper = styled.main`
  display: flex;
`;
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  flex-grow: 1;
  overflow-x: auto;
`;
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTable = styled.table`
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
  border-collapse: collapse;
  th,
  td {
    text-align: left;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;
