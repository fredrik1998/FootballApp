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
    padding: 8px;
    border-bottom: 1px solid #000;
  }

  th {
    background-color: #f2f2f2;
  }

  td:nth-child(1),
  td:nth-child(4) {
    width: 40%;
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


export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`
