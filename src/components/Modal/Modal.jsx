import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Input from '../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';

export class Modal extends Component {
    static propTypes = {

    }

    state = {
        title: '',
        date: '',
        cash: '',
        desc: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);

    }

    render() {
        const { title, date, cash, desc } = this.state;
        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title="Add" />
                    <form autoComplete="off" className={styles.form}>
                        <Input tag="input" type="text" name="title" value={title} onChange={this.handleChange} />
                        <Input tag="input" type="date" name="date" value={date} onChange={this.handleChange} />
                        <Input tag="input" type="text" name="cash" value={cash} onChange={this.handleChange} />
                        <Input tag="textarea" name="desc" value={desc} onChange={this.handleChange} />
                        {/* <input className={styles.input} type="radio" name="revenuesAndExpenses" checked />
                            <input className={styles.input} type="radio" name="revenuesAndExpenses" /> */}
                    </form>
                </section>
            </div >
        )
    }
}

export default Modal;
