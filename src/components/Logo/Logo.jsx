import React from 'react';
import Money from '@material-ui/icons/AttachMoney';
import PropTypes from 'prop-types';
import styles from './Logo.module.scss';

const Logo = ({ isStartView }) => (
  <>
    {' '}
    {isStartView ? (
      <div className={styles.wrapper__start}>
        <p className={styles.book__start}>Book</p>
        <div className={styles.middleWrapper__start}>
          <Money className={styles.icon__start} />
          <p className={styles.of__start}>of</p>
          <div className={styles.internalWrapper__start}>
            <p className={styles.revenues__start}>revenues</p>
            <p className={styles.and__start}>&</p>
            <p className={styles.expenses__start}>expenses</p>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.wrapper__home}>
        <Money className={styles.iconLeft__home} />
        <Money className={styles.iconRight__home} />
        <p className={styles.book__home}>Book</p>
        <p className={styles.of__home}>of</p>
        <div className={styles.internalWrapper__home}>
          <p className={styles.revenues__home}>revenues</p>
          <p className={styles.and__home}>&</p>
          <p className={styles.expenses__home}>expenses</p>
        </div>
      </div>
    )}{' '}
  </>
);

Logo.propTypes = {
  isStartView: PropTypes.bool.isRequired,
};

export default Logo;
