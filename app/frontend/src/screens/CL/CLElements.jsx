import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTable = styled.table`
  width: 100%;
  th,
  td {
    text-align: left;
    border-collapse: collapse;
    padding: 4px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;
