import React from 'react';
import { FaCameraRetro } from 'react-icons/fa';

import Menu from './Menu';

import { Container, Logo } from './styles';

const Header = () => (
  <Container>
    <Logo>
      Estúdio Show
      <FaCameraRetro className="camera-logo" />
    </Logo>
    <Menu />
  </Container>
);

export default Header;
