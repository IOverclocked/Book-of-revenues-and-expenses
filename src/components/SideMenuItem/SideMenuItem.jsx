import React from 'react';
import styles from './SideMenuItem.module.scss';

const SideMenuItem = ({ content }) => (
    <li className={styles.wrapper}>
        {content}
    </li>
)


export default SideMenuItem;
