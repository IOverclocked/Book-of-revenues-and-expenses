import React from 'react';
import Money from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import styles from './SideMenu.module.scss';
import SideMenuItem from '../SideMenuItem/SideMenuItem';

const menuList = ['Home', 'Details', 'Above'];

const SideMenu = ({ toggleSideMenuControl: isOpen }) => (
  <div className={isOpen ? styles.wrapper__open : styles.wrapper__close}>
    <nav className={isOpen ? styles.menu__open : styles.menu__close}>
      <header className={styles.wrapper__icons}>
        <Money className={isOpen ? styles.icon__open : styles.icon__close} />
        <Money className={isOpen ? styles.icon__open : styles.icon__close} />
      </header>
      <ul className={styles.wrapper__list}>
        {menuList.map(item => (
          <SideMenuItem key={item} content={item} />
        ))}
      </ul>
    </nav>
  </div>
);

SideMenu.propTypes = {
  toggleSideMenuControl: PropTypes.bool.isRequired,
};

export default SideMenu;
