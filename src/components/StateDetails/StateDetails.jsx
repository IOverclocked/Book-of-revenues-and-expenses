import React from 'react';
import PropTypes from 'prop-types';
import styles from './StateDetails.module.scss';

const getTodayDate = () => {
  const D = new Date();
  const y = D.getFullYear();
  let m = D.getMonth() + 1;
  let d = D.getDate();

  m = m < 10 ? `0${m}` : m;
  d = d < 10 ? `0${d}` : d;

  return `${d}/${m}/${y}`;
};

const StateDetails = ({ result, expenses, revenues }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.state}>
        <h2 className={styles.cashState}>{result}</h2>
      </section>
      <section className={styles.stateDetails}>
        <div className={styles.revenues}>
          <h3 className={styles.title}>Revenues</h3>
          <span>{revenues}</span>
        </div>
        <div className={styles.date}>
          <h3>{getTodayDate()}</h3>
        </div>
        <div className={styles.expenses}>
          <h3 className={styles.title}>Expenses</h3>
          <span>{expenses}</span>
        </div>
      </section>
    </div>
  );
};

StateDetails.propTypes = {
  result: PropTypes.string.isRequired,
  expenses: PropTypes.string.isRequired,
  revenues: PropTypes.string.isRequired,
};

export default StateDetails;
