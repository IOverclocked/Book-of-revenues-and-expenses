import React from 'react';
import styles from './Hamburger.module.scss';

const { focus, base } = styles;

const Hamburger = ({ handleToggleSideMenu, toggleSideMenuControl }) => (
    <div className={styles.wrapper} onClick={handleToggleSideMenu}>
        <span className={toggleSideMenuControl ? focus : base}></span>
        <span className={toggleSideMenuControl ? focus : base}></span>
        <span className={toggleSideMenuControl ? focus : base}></span>
    </div>
)

export default Hamburger;
