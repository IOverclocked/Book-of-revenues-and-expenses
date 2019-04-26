import React from 'react';
import styles from './SideMenu.module.scss';
import Money from '@material-ui/icons/AttachMoney';
import SideMenuItem from '../SideMenuItem/SideMenuItem';
import PropTypes from 'prop-types';

const {
    wrapper__open,
    wrapper__close,
    menu__open,
    menu__close,
    wrapper__icons,
    icon__close,
    icon__open,
    wrapper__list
} = styles;

const menuList = ['Home', 'Details', 'Above'];

const SideMenu = ({ toggleSideMenuControl: isOpen }) => (
    <div className={isOpen ? wrapper__open : wrapper__close}>
        <nav className={isOpen ? menu__open : menu__close}>
            <header className={wrapper__icons}>
                <Money className={isOpen ? icon__open : icon__close} />
                <Money className={isOpen ? icon__open : icon__close} />
            </header>
            <ul className={wrapper__list}>
                {
                    menuList.map(item => <SideMenuItem key={item} content={item} />)
                }
            </ul>
        </nav>
    </div>
)

SideMenu.prototype = {
    toggleSideMenuControl: PropTypes.bool.isRequired
}

export default SideMenu;
