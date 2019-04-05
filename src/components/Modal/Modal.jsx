import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/actions';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Input from '../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';
import NavButton from '../NavButton/NavButton';

export class Modal extends Component {
    static propTypes = {
        headerTitle: PropTypes.string.isRequired,
        btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
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
        const { headerTitle, btns, handleToggleModal } = this.props;
        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title={headerTitle} handleToggleModal={handleToggleModal} />
                    <form autoComplete="off" className={styles.form}>
                        <Input tag="input" type="text" name="title" value={title} onChange={this.handleChange} />
                        <Input tag="input" type="date" name="date" value={date} onChange={this.handleChange} />
                        <Input tag="input" type="text" name="cash" value={cash} onChange={this.handleChange} />
                        <Input tag="textarea" name="desc" value={desc} onChange={this.handleChange} />
                        {/* <input className={styles.input} type="radio" name="revenuesAndExpenses" checked />
                            <input className={styles.input} type="radio" name="revenuesAndExpenses" /> */}
                    </form>
                    <section className={styles.btns}>
                        {btns.map(btn => <NavButton key={btn.title} title={btn.title} />)}
                    </section>
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
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(Modal);
