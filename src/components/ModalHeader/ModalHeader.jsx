import React from 'react';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import styles from './ModalHeader.module.scss';

const ModalHeader = ({ title, toggleModal }) => (
  <header className={styles.wrapper}>
    <span className={styles.title}>{title}</span>
    <Close className={styles.icon} onClick={() => toggleModal()} />
  </header>
);

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ModalHeader;
