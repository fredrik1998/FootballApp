import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 90%;
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
    left: -3rem;
    font-size: 0;
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

  @media screen and (max-width: 768px){
    td:nth-child(2)::before {
      content: "";
    }
  }

  td:nth-child(3),
  td:nth-child(5) {
   position: relative;
   left: 6rem;
   width: 5%;
   @media screen and (max-width: 950px){
    left: 0;
   }
}
.score-container {
  display: flex;
  gap: 20px;
}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`
