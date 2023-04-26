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
export const StyledTable = styled.table`
width: 80%;
border-collapse: collapse;
`
export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
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
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
`
export const MatchDetails = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 80%;
gap: 20px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
`
export const MatchExtraInfo = styled.div`
display: flex;
flex-direction: row;
gap: 40px;
border-bottom: 1px solid #000;
padding-bottom: 20px;
`
export const StyledH1 = styled.h1`
font-weight: 400;
font-size: 26px;
`
export const StyledH2 = styled.h2`

`
export const StyledP = styled.p`
font-size: 24px;
`