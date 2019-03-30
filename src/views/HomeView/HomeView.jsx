import React, { Component } from 'react';
import Style from './HomeView.module.scss';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';

export class HomeView extends Component {
    render() {
        return (
            <>
                <header className={Style.header}>
                    <Logo />
                    <Hamburger />
                </header>


            </>
        )
    }
}

export default HomeView;
