import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.div`
display: flex;
justify-content: space-evenly;
flex-direction: column;
width: 80%;
`
export const StyledDiv = styled.div`
width: 100%;
margin: 1rem auto;
`
export const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
th, td{
text-align: left;
padding: 8px;
border-bottom: 1px solid #fafafa;
}
th{
    background-color: #f2f2f2;
}
td:nth-child(2), td:nth-child(3) {
    width: 15%;
  }
`
export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`
