import React from 'react';
import styles from './AboveView.module.scss';
import Header from '../../components/Header/Header';

function AboveView() {
    return (
        <div className={styles.wrapper}>
            <Header />
            Above
        </div>
    )
}

export default AboveView;
