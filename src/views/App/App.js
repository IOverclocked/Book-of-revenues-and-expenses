import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { startApp } from '../../actions/actions';
import StartView from '../StartView/StartView';
import HomeView from '../HomeView/HomeView';
import './App.module.scss';

class App extends Component {
    render() {
        const { startViewIsOpen, startApp } = this.props;
        return (
            <BrowserRouter>
                <>
                    {
                        startViewIsOpen
                            ? <Route path="/" render={(props) => <StartView {...props} startApp={startApp} />} />
                            : <Route path="/" component={HomeView} />
                    }
                    <Switch>
                        {/* todo */}
                    </Switch>
                </>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    const { viewReducers: view } = state;
    return {
        startViewIsOpen: view.start.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startApp: () => { 
            dispatch(startApp()) 
        }
    };
}

export default (connect(mapStateToProps, mapDispatchToProps))(App);
