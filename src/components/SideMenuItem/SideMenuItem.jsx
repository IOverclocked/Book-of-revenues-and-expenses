import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SideMenuItem.module.scss';

const SideMenuItem = ({ content }) => (
  <li className={styles.wrapper}>
    <Link className={styles.link} to={content === 'Home' ? '/' : `/${content.toLowerCase()}`}>
      {content}
    </Link>
  </li>
);

SideMenuItem.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SideMenuItem;
