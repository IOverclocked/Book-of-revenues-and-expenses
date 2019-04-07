import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, add } from '../../actions/actions';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import ModalHeader from '../ModalHeader/ModalHeader';
import Form from '../Form/Form';

class Modal extends Component {
    static propTypes = {
        headerTitle: PropTypes.string.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
    }

    render() {
        const { headerTitle, handleToggleModal } = this.props;

        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title={headerTitle} handleToggleModal={handleToggleModal} />
                    <Form />
                </section>
            </ div >
        )
    }
}

const mapStateToProps = (state) => {
    const { view } = state;
    return {
        headerTitle: view.modal.title,
        btns: view.modal.btns
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (toggle = false, title = '', btns = []) => {
            dispatch(toggleModal(toggle, title, btns))
        },
        handleAdd: (newItem) => {
            dispatch(add(newItem))
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(Modal);

