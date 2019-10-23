import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  nav a {
    color: #FFF;
    text-decoration: none;
    font-size: 18px;
    padding: 15px;
    margin-right: 40px;
    border: 1px solid #FFF;
    font-weight: bold;

    :hover {
      text-decoration: underline;
    }

    svg {
      display: inline-flex;
      vertical-align: middle;
      font-size: 30px;
      margin-right: 15px;
    }
  }
`;
