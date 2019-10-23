import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';

import { Container } from './styles';

const Menu = () => (
  <Container>
    <nav>
      <ul>
        <Link to="/login">
          <FaUserCircle />
          FAZER LOGIN
        </Link>
        <Link to="/register">
          <FaUserPlus />
          CADASTRE-SE
        </Link>
      </ul>
    </nav>
  </Container>
);

export default Menu;
