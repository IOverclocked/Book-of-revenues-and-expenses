import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavButton.module.scss';

const NavButton = ({ type, classType, title, ...props }) => {
  let controlClassName;
  if (classType === 'expenses') {
    controlClassName = styles.wrapper__expenses;
  } else if (classType === 'revenues') {
    controlClassName = styles.wrapper__revenues;
  } else {
    controlClassName = styles.confirmButton;
  }

  return (
    <button type={type} title={title} className={controlClassName} {...props}>
      {title}
    </button>
  );
};

NavButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  title: PropTypes.string.isRequired,
  classType: PropTypes.oneOf(['expenses', 'revenues', undefined]),
};

NavButton.defaultProps = {
  type: 'button',
  classType: undefined,
};

export default NavButton;
