import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .superiorMenu {
    display: flex;
  }

  .superiorMenu .login-mobile {
    display: none;
    margin: 0;

    svg {
      display: inline-flex;
      vertical-align: middle;
      font-size: 40px;
      cursor: pointer;
      color: #0C3168;
    }

  }

  .superiorMenu ul a {
    color: #0C3168;
    text-decoration: none;
    font-size: 15px;
    margin: 0 15px;
    padding: 15px;
    border: 1px solid #0C3168;
    font-weight: bold;

    :hover {
      text-decoration: underline;
    }

    svg {
      display: inline-flex;
      vertical-align: middle;
      font-size: 30px;
      margin-right: 15px;
      color: #0C3168;
    }
  }

  @media only screen and (max-width: 1000px) {
    .superiorMenu ul {
      display: none;
    }
  }

  @media only screen and (min-width: 651px) and (max-width: 1000px) {
    .superiorMenu .login-mobile {
      display: block;
    }
  }

  @media only screen and (max-width: 650px) {
    flex: 0;

    ${(props) => props.menu === false && `
      .superiorMenu {
        display: none;
      }
    `}

    ${(props) => props.menu && `
      .superiorMenu .login-mobile {
        display: block;
      }
    `}
  }
`;
