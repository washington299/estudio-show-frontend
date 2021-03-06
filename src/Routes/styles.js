import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 10vh 90vh;
  background-color: #ecf1f8;

  > div {
    grid-column-start: 2;
    grid-column-end: 3;
    padding: 50px;
  }
`;
