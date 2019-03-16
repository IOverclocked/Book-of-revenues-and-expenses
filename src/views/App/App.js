import React, { Component } from 'react';
import Start from '../Start/Start';
import style from './App.module.scss';

class App extends Component {
    state = {
        startView: true
        // counterList: [
        //     {
        //         date: '01-02-2012',
        //         description: 'Desc',
        //         cash: 159.99,
        //     },
        //     {
        //         date: '01-02-2012',
        //         description: 'Desc',
        //         cash: 159.99,
        //     },
        //     {
        //         date: '01-02-2012',
        //         description: 'Desc',
        //         cash: 159.99,
        //     },
        // ]
    }

    render() {
        return (
            <>
                {
                    this.state.startView
                        ? <Start />
                        : null
                }
            </>
        );
    }
}

export default App;
