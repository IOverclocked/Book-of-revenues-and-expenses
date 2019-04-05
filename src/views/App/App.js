import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startApp } from '../../actions/actions';
import StartView from '../StartView/StartView';
import HomeView from '../HomeView/HomeView';
import './App.module.scss';

class App extends Component {
    static propTypes = {
        startViewIsOpen: PropTypes.bool.isRequired,
        handleStartApp: PropTypes.func.isRequired
    }

    render() {
        const { startViewIsOpen, handleStartApp } = this.props;
        return (
            <BrowserRouter>
                <>
                    {
                        startViewIsOpen
                            ? <Route path="/" render={(props) => <StartView {...props} handleStartApp={handleStartApp} />} />
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
    const { view } = state;
    return {
        startViewIsOpen: view.start.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleStartApp: () => { 
            dispatch(startApp()) 
        }
    };
}

export default (connect(mapStateToProps, mapDispatchToProps))(App);
