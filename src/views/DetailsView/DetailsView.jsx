import React from 'react';
import styles from './DetailsView.module.scss';
import Header from '../../components/Header/Header';
import StateDetails from '../../components/StateDetails/StateDetails';
import ListDetails from '../../components/ListDetails/ListDetails';


function DetailsView(props) {
    return (
        <div className={styles.wrapper}>
            <Header />
            <StateDetails />
            <div className={styles.listWrapper}>
                <ListDetails />
                <ListDetails isExpenses />
            </div>
        </div>
    )
}


export default DetailsView;

