import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavButton.module.scss';

const NavButton = ({ type, classType, title, ...props }) => (
    <button type={type ? type : 'button'} className={
        classType === 'expenses' ? styles.wrapper__expenses :
            classType === 'revenues' ? styles.wrapper__revenues :
                styles.confirmButton
    } {...props}>
        {title}
    </button>
)

NavButton.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired
}


export default NavButton;