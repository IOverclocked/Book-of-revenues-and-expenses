import React from 'react';
import PropTypes from 'prop-types';
import styles from './Radio.module.scss';

const setCircleInClassName = name =>
  name === 'expenses' ? styles.circle__expenses : styles.circle__revenues;

const Radio = ({ field: { name, value, onChange, onBlur }, id, label, ...props }) => (
  <label className={styles.wrapper} htmlFor={id}>
    <input
      id={id}
      name={name}
      type="radio"
      value={id}
      onChange={onChange}
      onBlur={onBlur}
      checked={id === value}
      className={styles.input}
      {...props}
    />
    <div className={styles.circle__out}>
      <div className={setCircleInClassName(id)} />
    </div>
    <span className={styles.label}>&nbsp;{label}</span>
  </label>
);

Radio.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Radio;
