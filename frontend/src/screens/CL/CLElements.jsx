import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
grid-template-columns: repeat(2, 1fr);
@media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
