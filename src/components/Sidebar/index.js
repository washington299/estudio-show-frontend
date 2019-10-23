import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaHome,
  FaUsers,
  FaHeadset,
} from 'react-icons/fa';

import { Container } from './styles';

const Sidebar = () => (
  <Container>
    <ul>
      <FaBars className="svg-menu" />
      <Link to="/">
        <FaHome title="Home" />
      </Link>
      <Link to="/photographers">
        <FaUsers title="Fotográfos" />
      </Link>
      <Link to="/support">
        <FaHeadset title="Suporte" />
      </Link>
    </ul>
  </Container>
);

export default Sidebar;
