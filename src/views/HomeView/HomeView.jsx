import React, { Component } from 'react';
import Style from './HomeView.module.scss';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import StateView from '../StateView/StateView';
import AddButton from '../../components/AddButton/AddButton';
import ListItemsView from '../ListItemsView/ListItemsView';

export class HomeView extends Component {
    render() {
        return (
            <>
                <header className={Style.header}>
                    <Logo />
                    <Hamburger />
                </header>
                <section className={Style.main}>
                    <StateView />
                </section>
                <ListItemsView />
                <AddButton />
            </>
        )
    }
}

export default HomeView;
