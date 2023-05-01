import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 3em;
width: 100%;
`
export const MatchCard = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
gap: 40px;
`
export const MatchInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
`
export const MatchDetails = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 80%;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
@media screen and (max-width: 767px){
    gap: 10px;
}
`
export const MatchExtraInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
border-bottom: 1px solid #000;
padding-bottom: 20px;
@media screen and (max-width: 768px){
gap: 20px;
}
`
export const StyledH1 = styled.h1`
font-weight: 400;
font-size: 26px;
`
export const StyledH2 = styled.h2`
font-weight: 400;
`
export const StyledLink = styled(Link)`
font-weight: 400;
font-size: 26px;
color: #fafafa;
text-decoration: none;
cursor: pointer;
@media screen and (max-width: 768px){
 font-size: 18px;   
}
`
export const StyledP = styled.p`
font-size: 24px;
@media screen and (max-width: 768px){
font-size: 20px;
}
`
export const TeamLogo = styled.img`
width: 100px;
@media screen and (max-width: 768px){
width: 50px;
height: 50px;
}
`
export const Head2HeadCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
padding-bottom: 4rem;
`
export const WinsBadge = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #4caf50;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px; 
}
`
export const DrawsBadge = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #ff9800;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px; 
}
`
export const LossBadge = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f44336;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 15px;
@media screen and (max-width: 768px){
    width: 20px;
    height: 20px;
}
`
export const Head2HeadText = styled.p`
margin-top: 8px;
font-size: 24px;
@media screen and (max-width: 768px){
 margin-top: 4px; 
}
`
export const StyledDiv = styled.div`
 width: 100%;
margin: 1rem auto;
`;

export const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  tr {
  position: relative;
  cursor: pointer;
  }
  tr:hover {
    box-shadow: inset 0 0 0 9999px rgba(255, 255, 255, 0.3);
  }
  tr td {
    position: relative;
    z-index: 1;
  }

  th,
  td {
    text-align: left;
    padding: 20px;
    border-bottom: 1px solid #000;
  }

  th {
    background-color: #f2f2f2;
  }

  td:nth-child(1),
  td:nth-child(4) {
    width: 35%;
  }

  td:nth-child(2),
  td:nth-child(5) {
    width: 15%;
  }

  td:nth-child(2) {
    text-align: right;
  }

  td:nth-child(3),
  td:nth-child(5) {
    text-align: left;
  }
`;

export const TeamLink = styled(Link)`
color: #fafafa;
text-decoration: none;
cursor: pointer;

`