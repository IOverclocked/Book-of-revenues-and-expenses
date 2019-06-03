import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const checkIsTextarea = (e, tag, type) => {
  if (tag !== 'textarea') {
    e.target.type = type;
  }
};

const setInputClassName = (tag, touch, err) => {
  let style = '';

  if (tag === 'textarea') {
    style = styles.textarea;
  } else {
    style = styles.input;
  }

  style = touch && err ? `${style} ${styles.valid}` : style;

  return style;
};

const setWrapperClassName = tag => {
  if (tag === 'textarea') {
    return styles.textarea__wrapper;
  }
  return styles.wrapper;
};

const Input = ({ input, tag: Tag, type, name, label, maxLength, meta: { touched, error } }) => (
  <div className={setWrapperClassName(Tag)}>
    <Tag
      {...input}
      className={setInputClassName(Tag, touched, error)}
      label={label}
      name={name}
      placeholder=" "
      onFocus={e => checkIsTextarea(e, Tag, type)}
      onBlur={e => checkIsTextarea(e, Tag, 'text')}
      maxLength={maxLength}
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    {touched && error && <section className={styles.feedback}>{error}</section>}
  </div>
);

Input.propTypes = {
  tag: PropTypes.oneOf(['input', 'textarea']),
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
  }),
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  maxLength: '50',
  meta: {
    touched: false,
    error: false,
  },
  name: '',
};

export default Input;
