import React from 'react';
import styles from './Input.module.scss';

const _checkIsTextarea = (e, tag, type) => {
    if (tag !== 'textarea') {
        e.target.type = type;
    } else return
}

const _setInputClassName = (tag, err) => {
    let style = '';

    if (tag === 'textarea') {
        style = styles.textarea;
    } else {
        style = styles.input;
    }

    style = err ? `${style} ${styles.valid}` : style;

    return style;
}

const _setWrapperClassName = (tag) => {
    if (tag === 'textarea') {
        return styles.textarea__wrapper;
    } else {
        return styles.wrapper;
    }
}

const Input = ({ tag: Tag, type, name, maxLength, value, errors, ...props }) => (
    <div className={_setWrapperClassName(Tag)}>
        <Tag
            className={_setInputClassName(Tag, errors)}
            name={name}
            value={value}
            placeholder=' '
            onFocus={(e) => _checkIsTextarea(e, Tag, type)}
            onBlur={(e) => _checkIsTextarea(e, Tag, 'text')}
            maxLength={maxLength}
            {...props}
        />
        <label className={styles.label} htmlFor={name}>
            {name}
        </label>
        <section className={styles.feedback}>
            {errors}
        </section>
    </div>
)

export default Input;