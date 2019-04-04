import React from 'react';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, type, name, value, placeholder, ...props }) => (
    <div className={styles.wrapper}>
        <Tag
            className={`${styles.input} ${styles[name]}`}
            name={name}
            value={value}
            placeholder=' '
            onFocus={(e) => {
                if (Tag !== 'textarea') {
                    e.target.type = type
                } else return
            }}
            onBlur={(e) => {
                if (Tag !== 'textarea') {
                    e.target.type = 'text'
                } else return
            }}
            {...props}
        />
        <label className={styles.label} htmlFor={name}>
            {name}
        </label>
    </div>
)

export default Input;