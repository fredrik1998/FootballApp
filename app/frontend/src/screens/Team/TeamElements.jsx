import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const StyledDiv = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #fafafa;
  }
  th {
    background-color: #f2f2f2;
  }
  td:nth-child(3) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
export const StyledSquadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;

export const StyledH1 = styled.h1`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 0px;
`;
export const StyledText = styled.p`
  color: #ccc;
`;
export const StyledLogo = styled.img`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  padding-left: 2rem;
  width: 150px;
  height: 150px;
  @media screen and (max-width: 767px) {
    display: flex;
    align-self: center;
    padding-left: 0rem;
  }
`;
export const StyledCountryLogo = styled.img`
  width: 30px;
  height: 18px;
  border-radius: 2px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #fafafa;
`;
export const TeamInfoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: calc(2vw + 20px);
  flex-direction: row;
  @media (min-width: 768px) {
    gap: calc(3vw + 40px);
  }
  @media (min-width: 1200px) {
    gap: calc(4vw + 60px);
  }
`;
export const TeamCompetitionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-left: 15px;
  gap: calc(2vw + 20px);
  @media (min-width: 768px) {
    gap: calc(3vw + 40px);
  }
  @media (min-width: 1200px) {
    gap: calc(4vw + 60px);
  }
`;
export const TeamHeadingDiv = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
`;
