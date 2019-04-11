import React from 'react';
import styles from './Radio.module.scss';

const _setCircleInClassName = (name) => {
    if (name === 'expenses') {
        return styles.circle__expenses;
    } else {
        return styles.circle__revenues;
    }
}

const Radio = ({ input, name, label, value }) => (
    <label className={styles.wrapper}>
        <input
            {...input}
            name={name}
            type="Radio"
            label={label}
            value={value}
            checked={value === input.value}
            className={styles.input}
        />
        <div className={styles.circle__out}>
            <div className={_setCircleInClassName(value)}></div>
        </div>
        <span className={styles.label}>&nbsp;{label}</span>
    </label>
)

export default Radio;