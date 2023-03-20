import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import GlobalStyle from '../../GlobalStyles'
import { StyledDesc, StyledImage, StyledTitle, StyledWrapper } from './LandingscreenElements'
import img from '../../images/healthyfood2.webp'
import imgMobile from '../../images/healthyfood4.jpg'
const Landingscreen: React.FC = () => {
  return (
    <>
        <GlobalStyle/>
        <Header/>
        <StyledWrapper>
            <StyledTitle>Good health starts with a good diet.</StyledTitle>
            <StyledDesc>Track Your Health with Ease: The Ultimate Health Tracking App</StyledDesc>
        <StyledImage src={img} mobileSrc={imgMobile} ></StyledImage>
        </StyledWrapper>
        </>
  )
}

export default Landingscreen