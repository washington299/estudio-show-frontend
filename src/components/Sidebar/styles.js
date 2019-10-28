import styled from 'styled-components';

export const Container = styled.aside`
  transition: all 0.3s;

  .sidebar-login-mobile {
    display: none;
  }

  ${(props) => props.menu && `
    width: 70px;
    min-height: 100vh;
    background: #FFF;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .svg-menu {
      color: #0C3168;
      font-size: 40px;
      cursor: pointer;
      margin: 20px 0;
    }

    a {
      display: block;
      color: #0C3168;
      padding: 10px 0;
      cursor: pointer;

      svg {
        width: 70px;
        font-size: 25px;
      }

      span {
        display: none;
      }
    }

    a:hover {
      background-color: #ecf1f8;
    }

    a:active {
      background-color: #ecf1f8;
    }
  `}

  ${(props) => props.menu === false && `
    width: 200px;
    min-height: 100vh;
    background: #FFF;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    .svg-menu {
      color: #0C3168;
      font-size: 40px;
      cursor: pointer;
      margin: 20px 0;
    }

    a {
      width: 200px;
      display: flex;
      color: #0C3168;
      margin-bottom: 4px;
      padding: 10px 0;
      text-decoration: none;
      cursor: pointer;

      svg {
        width: 70px;
        font-size: 25px;
      }

      span {
        font-size: 18px;
      }
    }

    a:hover {
      background-color: #ecf1f8;
    }
  `}

  @media only screen and (max-width: 650px) {
    display: none;
    transition: all 0.3s;

    ${(props) => props.menu === false && `
      width: 200px;
      min-height: 100vh;
      background: #FFF;
      grid-column-start: 1;
      grid-column-end: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .svg-menu {
        color: #0C3168;
        font-size: 40px;
        cursor: pointer;
        margin: 20px 0;
      }

      .sidebar-login-mobile {
        display: flex;
      }

      a {
        width: 200px;
        display: flex;
        color: #0C3168;
        margin-bottom: 4px;
        padding: 10px 0;
        text-decoration: none;
        cursor: pointer;

        svg {
          width: 70px;
          font-size: 25px;
        }

        span {
          font-size: 18px;
        }
      }

      a:hover {
        background-color: #ecf1f8;
      }
    `}
  }
`;
