import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTitle = styled.h1`
  font-size: 43px;
  color: #fafafa;
  margin-top: 40px;
  text-transform: uppercase;
  align-self: flex-start;
  margin-bottom: 2rem;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
export const StyledButton = styled.button`
  display: flex;
  align-self: flex-end;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 700;
  padding: 10px;
  border: none;
  color: hsl(229, 24%, 87%);
  padding: 15px;
  background-color: hsl(213, 96%, 18%);
  cursor: pointer;
`;
export const StyledInput = styled.input`
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid hsl(229, 24%, 87%);
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: #fafafa;
  font-weight: 700;
  margin-top: -30px;
`;
export const StyledError = styled.p`
  color: red;
  font-size: 16px;
`;
