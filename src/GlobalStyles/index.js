import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  .invisibleInput {
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    background-color: rgba(0, 0, 0, 0.0);
  }

  .button {
    border: 1px solid #FFF;
    border-radius: 5px;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
  }
  .button:hover {
    transition: 0.3s;
  }

  .error-message {
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFBBBB;
    color: #FF0000;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .success-message {
    width: 100vw;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7CFFBB;
    color: #23d361;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
