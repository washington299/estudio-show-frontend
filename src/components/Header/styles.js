import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  align-items: center;
  padding: 0 50px;
  color: #0C3168;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Fascinate+Inline&display=swap');

  span {
    font-family: 'Baloo Bhai', cursive;
    font-size: 35px;
  }

  .camera-logo {
    margin-left: 15px;
    color: #0C3168;
    display: inline-flex;
    vertical-align: middle;
    font-size: 40px;
  }

  @media only screen and (max-width: 650px) {
    span {
      display: none;
    }
  }
`;

export const HeaderMobile = styled.header`
  display: none;

  @media only screen and (max-width: 650px) {
    ${(props) => props.menu === false && `
      grid-column-start: 2 !important;

      svg:first-child,
      .header-login-mobile {
        display: none;
      }
    `}

    height: 80px;
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #0C3168;
    background-color: #FFF;

    svg {
      font-size: 35px;
      cursor: pointer;
    }
  }
`;
