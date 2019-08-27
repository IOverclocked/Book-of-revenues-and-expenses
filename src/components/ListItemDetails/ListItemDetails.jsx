import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItemDetails.module.scss';

const ListItemDetails = ({ title, date, cash, isExpenses }) => (
  <li className={isExpenses ? styles.wrapper_expenses : styles.wrapper_revenues}>
    <div className={styles.header}>
      <span>{title}</span>
      <span>{date}</span>
    </div>
    <div className={styles.cash}>{cash}</div>
  </li>
);

ListItemDetails.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  cash: PropTypes.string.isRequired,
  isExpenses: PropTypes.bool,
};

ListItemDetails.defaultProps = {
  isExpenses: false,
};

export default ListItemDetails;
