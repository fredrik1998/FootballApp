import React, { useState } from "react";
import Header from "../../components/Header/Header";
import GlobalStyle from "../../GlobalStyles";
import {
  StyledDesc,
  StyledImage,
  StyledTitle,
  StyledWrapper,
} from "./LandingscreenElements";
import img from "../../images/football.jpg";
const Landingscreen = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledWrapper>
        <StyledTitle>Follow your favourite teams.</StyledTitle>
        <StyledDesc>
          FootyFrenzy: The Ultimate Football Dashboard App
        </StyledDesc>
        <StyledImage src={img} mobileSrc={img}></StyledImage>
      </StyledWrapper>
    </>
  );
};

export default Landingscreen;
