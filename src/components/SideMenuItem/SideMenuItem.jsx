import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SideMenuItem.module.scss';

const SideMenuItem = ({ content, ...props }) => (
  <li className={styles.wrapper} {...props}>
    <NavLink className={styles.link} to={content === 'Home' ? '/' : `/${content.toLowerCase()}`}>
      {content}
    </NavLink>
  </li>
);

SideMenuItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SideMenuItem;
