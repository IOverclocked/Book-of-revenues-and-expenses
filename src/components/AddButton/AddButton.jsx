import React from 'react';
import Add from '@material-ui/icons/Add';
import styles from './AddButton.module.scss';

const AddButton = ({ ...props }) => (
  <button className={styles.button} {...props}>
    <Add className={styles.button__icon} />
  </button>
);

export default AddButton;
