import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';

function Header({ toggleSideMenuControl, handleToggleSideMenu }) {
    return (
        <header className={styles.wrapper}>
            <Logo />
            <Hamburger
                toggleSideMenuControl={toggleSideMenuControl}
                handleToggleSideMenu={handleToggleSideMenu} />
        </header>
    )
}

Header.propTypes = {
    toggleSideMenuControl: PropTypes.bool.isRequired,
    handleToggleSideMenu: PropTypes.func.isRequired
}

export default Header;

