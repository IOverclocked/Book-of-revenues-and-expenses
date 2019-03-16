import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import style from './App.module.scss';

class App extends Component {
    state = {
        counterList: [
            {
                date: '01-02-2012',
                description: 'Desc',
                cash: 159.99,
            },
            {
                date: '01-02-2012',
                description: 'Desc',
                cash: 159.99,
            },
            {
                date: '01-02-2012',
                description: 'Desc',
                cash: 159.99,
            },
        ]
    }

    render() {
        return (
            <>
                <div className={style.header}>
                    <Logo />
                </div>
                <Counter counterList={this.state.counterList} />
            </>
        );
    }
}

export default App;
