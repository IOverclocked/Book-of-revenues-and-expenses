import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartView from '../StartView/StartView';
import HomeView from '../HomeView/HomeView';
import './App.module.scss';

class App extends Component {
    state = {
        startView: true
    }

    goToHomeView = () => {
        this.setState({ startView: false });
    }

    render() {
        return (
            <BrowserRouter>
                <>
                    {
                        this.state.startView
                            ? <Route path="/" render={(props) => <StartView {...props} goToHomeView={this.goToHomeView} />} />
                            : <Route path="/" component={HomeView} />
                    }
                    <Switch>

                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

export default App;
