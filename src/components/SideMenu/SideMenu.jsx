import React from 'react';
import Money from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import SideMenuItem from 'components/SideMenuItem/SideMenuItem';
import styles from './SideMenu.module.scss';

const menuList = ['Home', 'Details', 'Above'];

const SideMenu = ({ toggleSideMenuControl: isOpen, toggleSideMenu }) => (
  <div className={isOpen ? styles.wrapper__open : styles.wrapper__close}>
    <nav className={isOpen ? styles.menu__open : styles.menu__close}>
      <header className={styles.wrapper__icons}>
        <Money className={isOpen ? styles.icon__open : styles.icon__close} />
        <Money className={isOpen ? styles.icon__open : styles.icon__close} />
      </header>
      <ul className={styles.wrapper__list}>
        {menuList.map(item => (
          <SideMenuItem key={item} content={item} onClick={toggleSideMenu} />
        ))}
      </ul>
    </nav>
  </div>
);

SideMenu.propTypes = {
  toggleSideMenuControl: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

export default SideMenu;
