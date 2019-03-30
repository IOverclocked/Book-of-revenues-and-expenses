import React, { Component } from 'react';
import Style from './StateView.module.scss';

export class StateView extends Component {
    state = {
        cashState: 4358
    }

    render() {
        const { cashState } = this.state;
        return (
            <div className={Style.wrapper}>
                <div className={Style.circle__wrapper}>
                    <div className={Style.cashState}>{cashState}</div>
                </div>
            </div>
        )
    }
}

export default StateView
