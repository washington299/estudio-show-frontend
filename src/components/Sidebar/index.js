import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaHome,
  FaUsers,
  FaHeadset,
} from 'react-icons/fa';

import { Container } from './styles';

const Sidebar = () => {
  const [menuClosed, setmenuClosed] = useState(true);

  function handleMenu() {
    setmenuClosed(!menuClosed);
  }

  return (
    <>
      <Container menu={menuClosed}>
        <ul>
          <FaBars className="svg-menu" onClick={handleMenu} />
          <Link to="/">
            <FaHome title="Home" />
            <span>Home</span>
          </Link>
          <Link to="/photographers">
            <FaUsers title="Fotográfos" />
            <span>Fotográfos</span>
          </Link>
          <Link to="/support">
            <FaHeadset title="Suporte" />
            <span>Suporte</span>
          </Link>
        </ul>
      </Container>
    </>
  );
};

export default Sidebar;
