import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, del } from '../../actions/actions';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import ModalHeader from '../ModalHeader/ModalHeader';
import Form from '../Form/Form';
import MoreView from '../../views/MoreView/MoreView';

class Modal extends Component {
    static propTypes = {
        btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        details: PropTypes.object.isRequired,
        headerTitle: PropTypes.string.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
        handleDel: PropTypes.func.isRequired,
    }

    render() {
        const { headerTitle, handleToggleModal, handleDel, details, btns } = this.props;
        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title={headerTitle} handleToggleModal={handleToggleModal} />
                    {
                        (headerTitle !== 'More')
                            ? <Form />
                            : <MoreView
                                details={details}
                                btns={btns}
                                handleToggleModal={handleToggleModal}
                                handleDel={handleDel} />
                    }
                </section>
            </ div >
        )
    }
}

const mapStateToProps = (state) => {
    const { view } = state;
    return {
        headerTitle: view.modal.title,
        btns: view.modal.btns,
        details: view.modal.initData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (modalType, initData) => {
            dispatch(toggleModal(modalType, initData))
        },
        handleDel: (id) => {
            dispatch(del(id))
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(Modal);

