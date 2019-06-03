import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, startApp } from '../../actions/actions';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import AddButton from '../../components/AddButton/AddButton';
import ListItemsView from '../ListItemsView/ListItemsView';
import StartView from '../StartView/StartView';
import Modal from '../../components/Modal/Modal';

class HomeView extends Component {
    static propTypes = {
        toggleModalControl: PropTypes.bool.isRequired,
        startViewIsOpen: PropTypes.bool.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
        handleStartApp: PropTypes.func.isRequired
    }

    render() {
        const {
            toggleModalControl,
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
                            <Header />
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
        startViewIsOpen: view.start.open
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (modalType, initData) => {
            dispatch(toggleModal(modalType, initData));
        },
        handleStartApp: () => {
            dispatch(startApp())
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(HomeView);
