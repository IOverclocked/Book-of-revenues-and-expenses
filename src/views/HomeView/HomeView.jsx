import React, { Component } from 'react';
import Style from './HomeView.module.scss';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import StateView from '../StateView/StateView';
import AddButton from '../../components/AddButton/AddButton';
import ListItemsView from '../ListItemsView/ListItemsView';
import Modal from '../../components/Modal/Modal';

export class HomeView extends Component {
    state = {
        headerModal: '',
        modalToggle: false
    }
    handleShowModal = (type) => {
        switch (type) {
            case 'ADD':
                this.setState({ headerModal: 'Add' });
                break;

            default:
                break;
        }

        this.setState({ modalToggle: !this.state.modalToggle });
    }
    render() {
        const { headerModal, modalToggle } = this.state;
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
                {modalToggle && <Modal headerModal={headerModal} />}
                <AddButton onClick={() => this.handleShowModal('ADD')} />
            </>
        )
    }
}

export default HomeView;
