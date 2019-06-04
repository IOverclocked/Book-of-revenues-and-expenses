import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const checkIsTextarea = (e, tag, type) => {
  if (tag !== 'textarea') {
    e.target.type = type;
  }
};

const setInputClassName = tag => {
  let style = '';

  if (tag === 'textarea') {
    style = styles.textarea;
  } else {
    style = styles.input;
  }

  return style;
};

const setWrapperClassName = tag => {
  if (tag === 'textarea') {
    return styles.textarea__wrapper;
  }
  return styles.wrapper;
};

const Input = ({ tag: Tag, type, name, label, ...props }) => (
  <div className={setWrapperClassName(Tag)}>
    <Tag
      className={setInputClassName(Tag)}
      onFocus={e => checkIsTextarea(e, Tag, type)}
      onBlur={e => checkIsTextarea(e, Tag, 'text')}
      placeholder=" "
      {...props}
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
  </div>
);

Input.propTypes = {
  tag: PropTypes.oneOf(['input', 'textarea']),
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  maxLength: '50',
  name: '',
};

export default Input;
