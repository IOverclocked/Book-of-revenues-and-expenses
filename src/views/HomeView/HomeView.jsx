import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/actions';
import styles from './HomeView.module.scss';
import Logo from '../../components/Logo/Logo';
import Hamburger from '../../components/Hamburger/Hamburger';
import StateView from '../StateView/StateView';
import AddButton from '../../components/AddButton/AddButton';
import ListItemsView from '../ListItemsView/ListItemsView';
import Modal from '../../components/Modal/Modal';

class HomeView extends Component {
    render() {
        const { toggleModalControl, handleToggleModal, result } = this.props;
        const btns = [{ title: 'Add' }];
        const initData = { er: 'expenses' };
        return (
            <>
                <header className={styles.header}>
                    <Logo />
                    <Hamburger />
                </header>
                <section className={styles.main}>
                    <StateView result={result} />
                    <ListItemsView />
                </section>
                {toggleModalControl && <Modal />}
                <AddButton onClick={() => handleToggleModal(true, 'Add', btns, initData)} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { main, view } = state;
    return {
        result: main.result,
        toggleModalControl: view.modal.toggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (toggle, title, btns, initData) => {
            dispatch(toggleModal(toggle, title, btns, initData));
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(HomeView);
