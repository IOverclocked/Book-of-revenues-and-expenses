import React from 'react';
import { connect } from 'react-redux';
import { toggleSideMenu } from '../../actions/actions';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Hamburger from '../Hamburger/Hamburger';
import SideMenu from '../SideMenu/SideMenu';


function Header({ toggleSideMenuControl, handleToggleSideMenu }) {
    return (
        <header className={styles.wrapper}>
            <Logo />
            <Hamburger
                toggleSideMenuControl={toggleSideMenuControl}
                handleToggleSideMenu={handleToggleSideMenu} />
            {/* <SideMenu toggleSideMenuControl={toggleSideMenuControl} /> */}
        </header>
    )
}

Header.propTypes = {
    toggleSideMenuControl: PropTypes.bool.isRequired,
    handleToggleSideMenu: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        toggleSideMenuControl: state.view.sideMenu.toggle,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleSideMenu: () => {
            dispatch(toggleSideMenu());
        },
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(Header);

