import React, { Component } from 'react';
import styles from './StateView.module.scss';

export class StateView extends Component {
    state = {
        cashState: 4358
    }

    render() {
        const { cashState } = this.state;
        return (
            <div className={styles.wrapper}>
                <div className={styles.circle__wrapper}>
                    <div className={styles.cashState}>{cashState}</div>
                </div>
            </div>
        )
    }
}

export default StateView
