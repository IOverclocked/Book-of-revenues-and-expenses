import React from 'react';
import PropTypes from 'prop-types';
import Style from './NavButton.module.scss';

const NavButton = ({ type, desc, ...props }) => (
    <button className={
        type === 'expenses' ?
            `${Style.wrapper} ${Style.wrapper__expenses}` :
            `${Style.wrapper} ${Style.wrapper__revenues}`
    } {...props}>
        {desc}
    </button>
)

NavButton.propTypes = {
    type: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}


export default NavButton;