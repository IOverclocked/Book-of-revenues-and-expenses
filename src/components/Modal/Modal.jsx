import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/actions';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Input from '../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';

export class Modal extends Component {
    static propTypes = {
        headerTitle: PropTypes.string.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
    }

    state = {
        title: '',
        date: '',
        cash: '',
        desc: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });;
    }

    render() {
        const { title, date, cash, desc } = this.state;
        const { headerTitle, handleToggleModal } = this.props;
        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title={headerTitle} handleToggleModal={handleToggleModal}/>
                    <form autoComplete="off" className={styles.form}>
                        <Input tag="input" type="text" name="title" value={title} onChange={this.handleChange} />
                        <Input tag="input" type="date" name="date" value={date} onChange={this.handleChange} />
                        <Input tag="input" type="text" name="cash" value={cash} onChange={this.handleChange} />
                        <Input tag="textarea" name="desc" value={desc} onChange={this.handleChange} />
                        {/* <input className={styles.input} type="radio" name="revenuesAndExpenses" checked />
                            <input className={styles.input} type="radio" name="revenuesAndExpenses" /> */}
                    </form>
                </section>
            </ div >
        )
    }
}

const mapStateToProps = (state) => {
    const { view } = state;
    return {
        headerTitle: view.modal.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (toggle = false, title = '') => {
            dispatch(toggleModal(toggle, title))
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(Modal);
