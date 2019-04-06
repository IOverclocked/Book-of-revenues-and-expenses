import React from 'react';
import styles from './Input.module.scss';

const _checkIsTextarea = (e, tag, type) => {
    if (tag !== 'textarea') {
        e.target.type = type;
    } else return
}

const Input = ({ tag: Tag, type, name, value, pattern, required, ...props }) => (
    <div className={styles.wrapper}>
        <Tag
            className={Tag === 'textarea' ? `${styles.input} ${styles.textarea}` : styles.input}
            name={name}
            value={value}
            placeholder=' '
            onFocus={(e) => _checkIsTextarea(e, Tag, type)}
            onBlur={(e) => _checkIsTextarea(e, Tag, 'text')}
            pattern={pattern}
            required={required ? required : false}
            {...props}
        />
        <label className={styles.label} htmlFor={name}>
            {name}
        </label>
    </div>
)

export default Input;