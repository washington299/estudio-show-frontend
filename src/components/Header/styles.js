import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  background: #202225;
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: #FFF;
`;

export const Logo = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Fascinate+Inline&display=swap');

  font-family: 'Fascinate Inline', cursive;
  font-family: 'Baloo Bhai', cursive;  color: #FFF;
  font-size: 35px;

  .camera-logo {
    margin-left: 15px;
    color: #FFF;
    display: inline-flex;
    vertical-align: middle;
    font-size: 40px;
  }
`;
