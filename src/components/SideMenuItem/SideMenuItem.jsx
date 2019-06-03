import React from 'react';
import styles from './SideMenuItem.module.scss';
import { Link } from 'react-router-dom';

const SideMenuItem = ({ content }) => (
    <li className={styles.wrapper}>
        <Link className={styles.link} to={content === 'Home' ? '/' : `/${content.toLowerCase()}`}>{content}</Link>
    </li>
)


export default SideMenuItem;
