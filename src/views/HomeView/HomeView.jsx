import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, toggleSideMenu, startApp } from '../../actions/actions';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import ListItemsView from '../ListItemsView/ListItemsView';
import StartView from '../StartView/StartView';
import Modal from '../../components/Modal/Modal';
import MenuView from '../MenuView/MenuView';

class HomeView extends Component {
    static propTypes = {
        toggleModalControl: PropTypes.bool.isRequired,
        toggleSideMenuControl: PropTypes.bool.isRequired,
        startViewIsOpen: PropTypes.bool.isRequired,
        handleToggleSideMenu: PropTypes.func.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
        handleStartApp: PropTypes.func.isRequired
    }

    render() {
        const {
            toggleModalControl,
            toggleSideMenuControl,
            handleToggleSideMenu,
            handleToggleModal,
            startViewIsOpen,
            handleStartApp
        } = this.props;

        const initData = { er: 'expenses' };
        return (
            <>
                {
                    startViewIsOpen
                        ? <StartView handleStartApp={handleStartApp} />
                        : <>
                            <Header handleToggleSideMenu={handleToggleSideMenu} toggleSideMenuControl={toggleSideMenuControl} />
                            <MenuView toggleSideMenuControl={toggleSideMenuControl} />
                            <ListItemsView />
                            <AddButton onClick={() => handleToggleModal('Add', initData)} />
                            {toggleModalControl && <Modal />}
                        </>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    const { view } = state;
    return {
        toggleModalControl: view.modal.toggle,
        toggleSideMenuControl: view.sideMenu.toggle,
        startViewIsOpen: view.start.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (modalType, initData) => {
            dispatch(toggleModal(modalType, initData));
        },
        handleToggleSideMenu: () => {
            dispatch(toggleSideMenu());
        },
        handleStartApp: () => {
            dispatch(startApp())
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(HomeView);
