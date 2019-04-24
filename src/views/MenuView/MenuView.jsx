import React from 'react';
import styles from './MenuView.module.scss';
// import PropTypes from 'prop-types';

const { wrapper__open, wrapper__close, menu__open, menu__close } = styles;

const MenuView = ({ toggleSideMenuControl }) => (
    <div className={toggleSideMenuControl ? wrapper__open : wrapper__close}>
        <nav className={toggleSideMenuControl ? menu__open : menu__close}>
            1
        </nav>
    </div>
)

// MenuView.prototype = {

// }

export default MenuView;
