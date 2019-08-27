import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleModal as actionToggleModal, del as actionDel } from 'actions/actions';
import ModalHeader from 'components/ModalHeader/ModalHeader';
import Form from 'components/Form/Form';
import MoreView from 'views/MoreView/MoreView';
import styles from './Modal.module.scss';

const Modal = ({ headerTitle, toggleModal, handleDel, details, btns }) => (
  <div className={styles.modal}>
    <section className={styles.modal__section}>
      <ModalHeader title={headerTitle} toggleModal={toggleModal} />
      {headerTitle !== 'More' ? (
        <Form />
      ) : (
        <MoreView details={details} btns={btns} toggleModal={toggleModal} del={handleDel} />
      )}
    </section>
  </div>
);

Modal.propTypes = {
  btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  details: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    cash: PropTypes.number,
    desc: PropTypes.string,
    er: PropTypes.string,
  }),
  headerTitle: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  details: {
    id: '',
    title: '',
    date: '',
    cash: '',
    desc: '',
    er: '',
  },
};

const mapStateToProps = ({ view }) => ({
  headerTitle: view.modal.title,
  btns: view.modal.btns,
  details: view.modal.initData,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: (modalType, initData) => {
    dispatch(actionToggleModal(modalType, initData));
  },
  handleDel: id => {
    dispatch(actionDel(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
