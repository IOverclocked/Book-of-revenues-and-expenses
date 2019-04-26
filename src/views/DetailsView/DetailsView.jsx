import React from 'react';
import styles from './DetailsView.module.scss';
import Header from '../../components/Header/Header';

function DetailsView(props) {
    return (
        <div className={styles.wrapper}>
            <Header />
            Details
        </div>
    )
}


export default DetailsView;

