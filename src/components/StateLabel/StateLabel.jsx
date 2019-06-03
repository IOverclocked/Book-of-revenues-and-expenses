import React from 'react';
import styles from './StateLabel.module.scss';

const StateLabel = ({ result }) => (
    <div className={styles.wrapper}>
        <div className={styles.circle__wrapper}>
            <div className={styles.cashState}>{result}</div>
        </div>
    </div>
)

export default StateLabel;
