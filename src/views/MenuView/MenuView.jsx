import React from 'react';
import styles from './MenuView.module.scss';
import Money from '@material-ui/icons/AttachMoney';
// import PropTypes from 'prop-types';

const {
    wrapper__open,
    wrapper__close,
    menu__open,
    menu__close,
    wrapper__icons,
    icon__close,
    icon__open,
} = styles;

const MenuView = ({ toggleSideMenuControl: isOpen }) => (
    <div className={isOpen ? wrapper__open : wrapper__close}>
        <nav className={isOpen ? menu__open : menu__close}>
            <header className={wrapper__icons}>
                <Money className={isOpen ? icon__open : icon__close} />
                <Money className={isOpen ? icon__open : icon__close} />
            </header>
        </nav>
    </div>
)

// MenuView.prototype = {

// }

export default MenuView;
