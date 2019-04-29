import React from 'react';
import styles from './DetailsView.module.scss';
import Header from '../../components/Header/Header';
import StateDetails from '../../components/StateDetails/StateDetails';

function DetailsView(props) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <StateDetails />
        </div>
    )
}


export default DetailsView;

