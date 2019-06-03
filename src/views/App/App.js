import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from '../HomeView/HomeView';
import AboveView from '../AboveView/AboveView';
import DetailsView from '../DetailsView/DetailsView';
import './App.module.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/above" component={AboveView} />
                    <Route path="/details" component={DetailsView} />
                </>
            </BrowserRouter>
        );
    }
}

export default App;
