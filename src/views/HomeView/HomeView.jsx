import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import AddButton from 'components/AddButton/AddButton';
import { toggleModal as actionToggleModal, startApp as actionStartApp } from 'actions/actions';
import ListItemsView from 'views/ListItemsView/ListItemsView';
import StartView from 'views/StartView/StartView';
import Modal from 'components/Modal/Modal';

const firstInitData = { er: 'expenses' };

const HomeView = ({ toggleModalControl, toggleModal, startViewIsOpen, startApp }) => (
  <>
    {startViewIsOpen ? (
      <StartView onClick={startApp} />
    ) : (
      <>
        <Header />
        <ListItemsView />
        <AddButton onClick={() => toggleModal('Add', firstInitData)} />
        {toggleModalControl && <Modal />}
      </>
    )}
  </>
);

HomeView.propTypes = {
  toggleModalControl: PropTypes.bool.isRequired,
  startViewIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  startApp: PropTypes.func.isRequired,
};

const mapStateToProps = ({ view }) => ({
  toggleModalControl: view.modal.toggle,
  startViewIsOpen: view.start.open,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, initData) => {
    dispatch(actionToggleModal(modalType, initData));
  },
  startApp: () => {
    dispatch(actionStartApp());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
