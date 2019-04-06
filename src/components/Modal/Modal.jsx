import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, add } from '../../actions/actions';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Input from '../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';
import NavButton from '../NavButton/NavButton';

class Modal extends Component {
    static propTypes = {
        headerTitle: PropTypes.string.isRequired,
        btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        handleToggleModal: PropTypes.func.isRequired,
        handleAdd: PropTypes.func.isRequired,
    }

    state = {
        id: uuid.v1(),
        title: '',
        date: '',
        cash: '',
        desc: '',
        revenues: true,
        expenses: false
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });;
    }

    handleAddSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }


    render() {
        const { title, date, cash, desc } = this.state;
        const { headerTitle, btns, handleToggleModal } = this.props;
        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title={headerTitle} handleToggleModal={handleToggleModal} />
                    <form autoComplete="off" className={styles.form} onSubmit={(e) => this.handleAddSubmit(e)}>
                        <Input tag="input" type="text" name="title" value={title} onChange={this.handleChange} required />
                        <Input tag="input" type="date" name="date" value={date} onChange={this.handleChange} required />
                        <Input tag="input" type="text" name="cash" value={cash} onChange={this.handleChange} required />
                        <Input tag="textarea" name="desc" value={desc} onChange={this.handleChange} required />
                        {/* <input className={styles.input} type="radio" name="revenuesAndExpenses" checked />
                            <input className={styles.input} type="radio" name="revenuesAndExpenses" /> */}
                        <section className={styles.btns}>
                            {btns.map(btn => {
                                return (
                                    <NavButton
                                        type="submit"
                                        key={btn.title}
                                        title={btn.title}
                                    />
                                )
                            })}
                        </section>
                    </form>
                </section>
            </ div >
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

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
