import styled from 'styled-components'

export const StyledWrapper = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
flex-direction: column;
@media screen and (max-width: 767px) {
    height: 100vh;
    
}
`
export const StyledTitle = styled.h1`
font-size: 43px;
color: #000;
margin-top: 40px;
`

export const StyledDesc = styled.em`
font-size: 20px;
color: hsl(180, 14%, 20%);
`
export const StyledImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const StyledImage = styled.img`
border-radius: 5%;
width: 100%;
max-width: 1200px;
@media screen and (max-width: 767px) {
    content: url(${props => props.mobileSrc});
}
`