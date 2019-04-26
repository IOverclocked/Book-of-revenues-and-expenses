import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, toggleSideMenu } from '../../actions/actions';
import styles from './HomeView.module.scss';
import Header from '../../components/Header/Header';
import StateView from '../StateView/StateView';
import AddButton from '../../components/AddButton/AddButton';
import ListItemsView from '../ListItemsView/ListItemsView';
import Modal from '../../components/Modal/Modal';
import MenuView from '../MenuView/MenuView';

class HomeView extends Component {
    render() {
        const {
            toggleModalControl,
            toggleSideMenuControl,
            handleToggleSideMenu,
            handleToggleModal,
            result
        } = this.props;

        const initData = { er: 'expenses' };
        return (
            <>
                <MenuView toggleSideMenuControl={toggleSideMenuControl} />
                <Header handleToggleSideMenu={handleToggleSideMenu} toggleSideMenuControl={toggleSideMenuControl} />
                <section className={styles.main}>
                    <StateView result={result} />
                    <ListItemsView />
                </section>
                {toggleModalControl && <Modal />}
                <AddButton onClick={() => handleToggleModal('Add', initData)} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { main, view } = state;
    return {
        result: main.result,
        toggleModalControl: view.modal.toggle,
        toggleSideMenuControl: view.sideMenu.toggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (modalType, initData) => {
            dispatch(toggleModal(modalType, initData));
        },
        handleToggleSideMenu: () => {
            dispatch(toggleSideMenu());
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(HomeView);
