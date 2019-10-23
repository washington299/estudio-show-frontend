import styled from 'styled-components';

export const Container = styled.aside`
  width: 60px;
  height: 100vh;
  background: #202225;
  grid-column-start: 1;
  grid-column-end: 2;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .svg-menu {
    color: #FFF;
    font-size: 40px;
    cursor: pointer;
    margin: 20px 0;
  }

  a {
    display: block;
    color: #FFF;
    padding: 10px 0;

    svg {
      width: 100%;
      font-size: 25px;
      cursor: pointer;
    }
  }

  a:hover {
    background-color: #AAA;
  }
`;
