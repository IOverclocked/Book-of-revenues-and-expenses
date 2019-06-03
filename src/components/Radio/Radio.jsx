import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const setCircleInClassName = value => {
  if (value === 'expenses') {
    return styles.circle__expenses;
  }
  return styles.circle__revenues;
};

// todo napisać nowy radio button

const Radio = ({ input, name, label, value }) => (
  <label className={styles.wrapper} htmlFor={name}>
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
      <div className={setCircleInClassName(value)} />
    </div>
    <span className={styles.label}>&nbsp;{label}</span>
  </label>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default Radio;
