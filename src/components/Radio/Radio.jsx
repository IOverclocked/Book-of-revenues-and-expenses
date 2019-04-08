import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ input, name, label, value, checked }) => (

    <label className={styles.wrapper}>
        <input 
            {...input}
            name={name}
            type="Radio"
            className={styles.input}
            label={label}
            value={value}
            checked={checked || value === input.value ? true: false}
        />
        &nbsp;{label}
    </label>
)

export default Radio;