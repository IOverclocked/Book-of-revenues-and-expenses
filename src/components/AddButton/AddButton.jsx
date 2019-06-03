import React from 'react';
import Add from '@material-ui/icons/Add';
import styles from './AddButton.module.scss';

const AddButton = ({ ...props }) => (
    <button className={styles.wrapper} {...props}>
        <Add className={styles.icon} />
    </button>
)

export default AddButton;