import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './StateView.module.scss';

export class StateView extends Component {
    render() {
        const { result } = this.props;
        return (
            <div className={styles.wrapper}>
                <div className={styles.circle__wrapper}>
                    <div className={styles.cashState}>{result.result}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {result} = state;
    return {
        result
    }
}

export default (connect(mapStateToProps))(StateView);
