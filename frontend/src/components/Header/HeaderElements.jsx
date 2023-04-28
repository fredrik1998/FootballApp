import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
border-bottom: 1px solid #ccc;
padding-bottom: 2em;
`
export const StyledTitle = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 28px;
color: #fafafa;
text-decoration: none;
margin-top: 20px;
`

export const StyledLink = styled(Link)`
font-size: 20px;
font-weight: 400;
color: #000;
margin-top: 10px;
text-decoration: none;
`
export const StyledSeperator = styled.div`
border: 1px solid #ccc;
`
export const StyledButton = styled.button`
background: none;
`

