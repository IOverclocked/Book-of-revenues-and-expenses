import React, { Component } from 'react';
import Counter from '../Counter/Counter';
import Logo from '../../components/Logo/Logo';
import './app.css';

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
                <Logo />
                <div className="App">
                    <Counter counterList={this.state.counterList} />
                </div>
            </>
        );
    }
}

export default App;
