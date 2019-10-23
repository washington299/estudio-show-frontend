import styled from 'styled-components';
import img from '../../assets/images/fundo.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  .login-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    padding-bottom: 50px;
  }

  h1 {
    font-size: 50px;
    color: #FFF;
  }
  .verified {
    color: #FFF;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  color: #FFF;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 30px;

  label {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input::placeholder {
    color: #AAA;
  }
  input:focus {
    outline: none;
  }
  input {
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 20px;
    border-bottom: 1px solid #000;
  }
  .button--login {
    height: 40px;
    font-size: 20px;
    background-color: #0071b7;
    border: #0071b7;
    margin-bottom: 50px;
  }
  .button--login:hover {
    background-color: #66A7FF;
  }
  .login-helpers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 90px;

    a {
      width: 200px;
      font-size: 20px;
      color: #FFF;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }

  .social-media {
    display: flex;
    justify-content: space-around;

    svg {
      cursor: pointer;
      color: #FFF;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 470px;
  }

  @media only screen and (max-width: 470px) {
    width: 350px;
  }
`;
