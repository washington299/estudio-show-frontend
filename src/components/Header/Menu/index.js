import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';

import { Container } from './styles';

const Menu = ({ menu }) => (
  <Container menu={menu}>
    <div className="superiorMenu">
      <Link to="/login" className="login-mobile">
        <FaUserCircle />
      </Link>
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
    </div>
  </Container>
);

export default Menu;
