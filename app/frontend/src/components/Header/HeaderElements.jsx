import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background: #010c1a;
  padding-bottom: 2em;
`;
export const StyledTitle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #fafafa;
  text-decoration: none;
  margin-top: 20px;
`;
export const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin-top: 10px;
  text-decoration: none;
`;
export const StyledSeperator = styled.div`
  border: 1px solid #ccc;
`;
export const StyledButton = styled.button`
  background: none;
`;
export const StyledInput = styled.input`
  font-size: 16px;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #121212;
  border-radius: 18px;
  color: #121212;
`;
export const StyledLogo = styled.img`
  width: 30px;
  margin-top: 5px;
`;
export const StyledH3 = styled.h3`
  font-size: 24px;
  margin-left: 10px;
  color: #000;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
