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

  .register-title {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: auto;
    padding-bottom: 30px;
  }

  h1 {
    font-size: 50px;
    color: #FFF;
    margin-right: 30px;
  }
  .icon-user-add {
    color: #FFF;
  }

  @media only screen and (max-width: 470px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 550px;
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
  select {
    height: 25px;
    font-size: 20px;
  }
  option {
    font-size: 20px;
  }
  .button--add-user {
    height: 40px;
    font-size: 20px;
    background-color: #0071b7;
    border: #0071b7;
    margin-top: 20px;
  }
  .button--add-user:hover {
    background-color: #66A7FF;
  }

  @media only screen and (max-width: 600px) {
    width: 470px;
  }

  @media only screen and (max-width: 470px) {
    width: 350px;
  }
`;
