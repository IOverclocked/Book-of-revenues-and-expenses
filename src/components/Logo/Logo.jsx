import React from 'react';
import Money from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const Logo = ({ isStartView }) => (
  <>
    {isStartView ? (
      <div className={styles.wrapper_start}>
        <p className={styles.book}>Book</p>
        <div className={styles.middle_wrapper}>
          <Money className={styles.icon} />
          <p className={styles.of}>of</p>
          <div className={styles.internal_wrapper}>
            <p className={styles.revenues}>revenues</p>
            <p className={styles.and}>&</p>
            <p className={styles.expenses}>expenses</p>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.wrapper_home}>
        <Money className={styles.iconLeft} />
        <Money className={styles.iconRight} />
        <p className={styles.book}>Book</p>
        <p className={styles.of}>of</p>
        <div className={styles.internal_wrapper}>
          <p className={styles.revenues}>revenues</p>
          <p className={styles.and}>&</p>
          <p className={styles.expenses}>expenses</p>
        </div>
      </div>
    )}
  </>
);

Logo.propTypes = {
  isStartView: PropTypes.bool.isRequired,
};

export default Logo;
