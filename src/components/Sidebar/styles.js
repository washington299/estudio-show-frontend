import styled from 'styled-components';

export const Container = styled.aside`
  transition: all 0.3s;

  ${(props) => props.menu && `
    width: 64px;
    min-height: 100vh;
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
      cursor: pointer;

      svg {
        width: 64px;
        font-size: 25px;
      }

      span {
        display: none;
      }
    }

    a:hover {
      background-color: #AAA;
    }
  `}

  ${(props) => props.menu === false && `
    width: 200px;
    min-height: 100vh;
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
      width: 200px;
      display: flex;
      color: #FFF;
      margin-bottom: 4px;
      padding: 10px 0;
      text-decoration: none;
      cursor: pointer;

      svg {
        width: 64px;
        font-size: 25px;
      }

      span {
        font-size: 18px;
      }
    }

    a:hover {
      background-color: #AAA;
    }
  `}
`;
