import React from 'react';
import styles from './Radio.module.scss';

const _setCircleInClassName = (name) => {
    if (name === 'expenses') {
        return styles.circle__expenses;
    } else {
        return styles.circle__revenues;
    }
}

const show = (v,c) => {
    console.log(v);
    console.log(c);
    
}

const Radio = ({ input, name, label, value, checked }) => (
    <label className={styles.wrapper}>
        {show(input.value, input)}
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