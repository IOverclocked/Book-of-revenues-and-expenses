import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hamburger.module.scss';

const { focus, base } = styles;

const Hamburger = ({ toggleSideMenuControl, ...props }) => (
  <div className={styles.wrapper} {...props}>
    <span className={toggleSideMenuControl ? focus : base} />
    <span className={toggleSideMenuControl ? focus : base} />
    <span className={toggleSideMenuControl ? focus : base} />
  </div>
);

Hamburger.propTypes = {
  toggleSideMenuControl: PropTypes.bool.isRequired,
};

export default Hamburger;
