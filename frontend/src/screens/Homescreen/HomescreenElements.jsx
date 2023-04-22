import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;
export const ContentWrapper = styled.main`
display: flex;

`
export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
margin: 1rem auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #fafafa;
  }

  th {
    background-color: #f2f2f2;
  }

  td:nth-child(1),
  td:nth-child(4) {
    width: 35%;
  }

  td:nth-child(2){
    position: relative;
    left: -1rem;
    font-size: 0; // Hide the text with font-size: 0
  }

  td:nth-child(2)::before {
    content: attr(data-content);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 20px;
    color: #fff;
  }

  @media screen and (max-width: 767px){
    td:nth-child(2)::before {
      content: "";
    }
  }

  td:nth-child(3),
  td:nth-child(5) {
    width: 15%;
  }

  td:nth-child(3) {
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
