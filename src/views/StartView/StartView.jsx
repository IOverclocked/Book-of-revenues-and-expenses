import React from 'react';
import styles from './StartView.module.scss';
import Logo from '../../components/Logo/Logo';

const StartView = ({ ...props }) => (
  <div className={styles.wrapper}>
    <Logo isStartView />
    <div className={styles.buttonWrapper}>
      <button className={styles.button} {...props}>
        Lets get going
      </button>
    </div>
  </div>
);

export default StartView;
