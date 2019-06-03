import React from 'react';
import styles from './Input.module.scss';

const _checkIsTextarea = (e, tag, type) => {
    if (tag !== 'textarea') {
        e.target.type = type;
    } else return
}

const _setInputClassName = (tag, touch, err) => {
    let style = '';

    if (tag === 'textarea') {
        style = styles.textarea;
    } else {
        style = styles.input;
    }

    style = touch && err ? `${style} ${styles.valid}` : style;

    return style;
}

const _setWrapperClassName = (tag, i, m) => {
    if (tag === 'textarea') {
        return styles.textarea__wrapper;
    } else {
        return styles.wrapper;
    }
}

const Input = ({ input, tag: Tag, type, name, label, maxLength, meta: { touched, error } }) => (
    <div className={_setWrapperClassName(Tag)}>
        <Tag
            {...input}
            className={_setInputClassName(Tag, touched, error)}
            label={label}
            name={name}
            placeholder=' '
            onFocus={(e) => _checkIsTextarea(e, Tag, type)}
            onBlur={(e) => _checkIsTextarea(e, Tag, 'text')}
            maxLength={maxLength}
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        {touched && error && <section className={styles.feedback}>
            {error}
        </section>
        }
    </div>
)

export default Input;