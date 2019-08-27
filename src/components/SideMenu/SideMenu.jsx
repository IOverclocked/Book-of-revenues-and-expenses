import React from 'react';
import Money from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import SideMenuItem from 'components/SideMenuItem/SideMenuItem';
import styles from './SideMenu.module.scss';

const menuList = ['Home', 'Details', 'Above'];

const getStyled = isOpen =>
  isOpen
    ? {
        wrapper: 'open',
        nav: 'open__nav',
        header: 'open__header',
        icon: 'open__icon',
        list: 'open__list',
      }
    : {
        wrapper: 'close',
        nav: 'close__nav',
        header: 'close__header',
        icon: 'close__icon',
        list: 'close__list',
      };

const SideMenu = ({ toggleSideMenuControl: isOpen, toggleSideMenu }) => {
  const { wrapper, nav, header, icon, list } = getStyled(isOpen);
  return (
    <div className={styles[wrapper]}>
      <nav className={styles[nav]}>
        <header className={styles[header]}>
          <Money className={styles[icon]} />
          <Money className={styles[icon]} />
        </header>
        <ul className={styles[list]}>
          {menuList.map(item => (
            <SideMenuItem key={item} content={item} onClick={toggleSideMenu} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

SideMenu.propTypes = {
  toggleSideMenuControl: PropTypes.bool.isRequired,
  toggleSideMenu: PropTypes.func.isRequired,
};

export default SideMenu;
