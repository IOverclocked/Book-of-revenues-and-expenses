import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavButton.module.scss';

const NavButton = ({ type, desc, ...props }) => (
    <button className={
        type === 'expenses' ?
            `${styles.wrapper} ${styles.wrapper__expenses}` :
            `${styles.wrapper} ${styles.wrapper__revenues}`
    } {...props}>
        {desc}
    </button>
)

NavButton.propTypes = {
    type: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}


export default NavButton;