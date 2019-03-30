import React, { Component } from 'react';
import Style from './HomeView.module.scss';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import StateView from '../StateView/StateView';

export class HomeView extends Component {
    render() {
        return (
            <>
                <header className={Style.header}>
                    <Logo />
                    <Hamburger />
                </header>
                <StateView />


            </>
        )
    }
}

export default HomeView;
