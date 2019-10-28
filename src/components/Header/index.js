import React from 'react';
import { connect } from 'react-redux';
import { FaCameraRetro, FaBars } from 'react-icons/fa';

import Menu from './Menu';

import { Container, Logo, HeaderMobile } from './styles';

const Header = ({ menu, dispatch }) => {
  function toggleMenu(menuResult) {
    return {
      type: 'TOGGLE_MENU',
      menu: menuResult,
    };
  }

  return (
    <>
      <HeaderMobile menu={menu.menuClosed}>
        <FaBars onClick={() => dispatch(toggleMenu(!menu.menuClosed))} />
        <Logo>
          <span>Estúdio Show</span>
          <FaCameraRetro className="camera-logo" />
        </Logo>
        <Menu menu={menu.menuClosed} />
      </HeaderMobile>
      <Container>
        <Logo>
          <span>Estúdio Show</span>
          <FaCameraRetro className="camera-logo" />
        </Logo>
        <Menu />
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps)(Header);
