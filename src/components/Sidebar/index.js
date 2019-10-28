import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  FaBars,
  FaHome,
  FaUsers,
  FaHeadset,
  FaUserCircle,
} from 'react-icons/fa';

import { Container } from './styles';

const Sidebar = ({ menu, dispatch }) => {
  function toggleMenu(menuResult) {
    return {
      type: 'TOGGLE_MENU',
      menu: menuResult,
    };
  }

  let { menuClosed } = menu;

  return (
    <Container menu={menuClosed}>
      <FaBars className="svg-menu" onClick={() => dispatch(toggleMenu(!menuClosed))} />
      <ul>
        <Link
          to="/"
          onClick={() => dispatch(toggleMenu(menuClosed = true))}
        >
          <FaHome title="Home" />
          <span>Home</span>
        </Link>
        <Link
          to="/photographers"
          onClick={() => dispatch(toggleMenu(menuClosed = true))}
        >
          <FaUsers title="Fotográfos" />
          <span>Fotográfos</span>
        </Link>
        <Link
          to="/support"
          onClick={() => dispatch(toggleMenu(menuClosed = true))}
        >
          <FaHeadset title="Suporte" />
          <span>Suporte</span>
        </Link>
        <Link to="/login" className="sidebar-login-mobile">
          <FaUserCircle />
          <span>Login</span>
        </Link>
      </ul>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(Sidebar);
