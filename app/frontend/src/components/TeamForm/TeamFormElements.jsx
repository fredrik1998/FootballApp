import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: calc(1vw + 5px);
  margin-top: 4em;
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 20px;
  }
`;

export const FormBox = styled.div`
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
`;

export const WinBox = styled(FormBox)`
  background-color: #4caf50;
  color: white;
`;

export const LossBox = styled(FormBox)`
  background-color: #f44336;
  color: white;
`;

export const DrawBox = styled(FormBox)`
  background-color: #ff9800;
  color: white;
`;

export const StyledH1 = styled.h1`
  font-size: 24px;
  padding-bottom: 20px;
`;
export const AwayTeamLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    background-color: #121212;
    opacity: 50%;
  }
`;
