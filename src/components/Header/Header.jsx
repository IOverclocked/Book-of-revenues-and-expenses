import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleSideMenu as actionToggleSideMenu } from 'actions/actions';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import styles from './Header.module.scss';
import SideMenu from '../SideMenu/SideMenu';

const Header = ({ toggleSideMenuControl, toggleSideMenu, isStartView }) => {
  return (
    <header className={styles.wrapper}>
      <Logo isStartView={isStartView} />
      <Hamburger toggleSideMenuControl={toggleSideMenuControl} onClick={toggleSideMenu} />
      <SideMenu toggleSideMenuControl={toggleSideMenuControl} toggleSideMenu={toggleSideMenu} />
    </header>
  );
};

Header.propTypes = {
  toggleSideMenuControl: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
  isStartView: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ view }) => ({
  toggleSideMenuControl: view.sideMenu.toggle,
  isStartView: view.start.open,
});

const mapDispatchToProps = dispatch => ({
  toggleSideMenu: () => {
    dispatch(actionToggleSideMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
