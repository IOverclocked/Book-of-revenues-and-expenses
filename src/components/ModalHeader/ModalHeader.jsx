import React from 'react';
import styles from './ModalHeader.module.scss';
import Close from '@material-ui/icons/Close';

const ModalHeader = ({ title, handleToggleModal }) => (
    <header className={styles.wrapper}>
        <span className={styles.title}>{title}</span>
        <Close className={styles.icon} onClick={() => handleToggleModal()}/>
    </header>
)

export default ModalHeader;