import React from 'react';
import styles from './StateDetails.module.scss';

const StateDetails = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.state}>
        <h2 className={styles.cashState}>4358</h2>
      </section>
      <section className={styles.stateDetails}>
        <div className={styles.revenues}>
          <h3 className={styles.title}>Revenues</h3>
          <span>1299</span>
        </div>
        <div className={styles.date}>
          <h3>to 21-01-2019</h3>
        </div>
        <div className={styles.expenses}>
          <h3 className={styles.title}>Expenses</h3>
          <span>1299</span>
        </div>
      </section>
    </div>
  );
};

StateDetails.propTypes = {};

export default StateDetails;
