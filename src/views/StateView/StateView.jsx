import React from 'react';
import styles from './StateView.module.scss';

const StateView = ({ result }) => (
    <div className={styles.wrapper}>
        <div className={styles.circle__wrapper}>
            <div className={styles.cashState}>{result}</div>
        </div>
    </div>
)

export default StateView;
