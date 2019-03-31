import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './Modal.module.scss';

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
    }

    render() {
        const { title, date, cash, desc } = this.state;
        return (
            <div className={Style.wrapper}>
                <form className={Style.form}>
                    <input type="text" name="title" value={title} onChange={this.handleChange} />
                    <input type="date" name="date" value={date} onChange={this.handleChange} />
                    <input type="text" name="cash" value={cash} onChange={this.handleChange} />
                    <textarea type="text" name="desc" value={desc} onChange={this.handleChange} ></textarea>
                    <input type="radio" name="revenuesAndExpenses" checked />
                    <input type="radio" name="revenuesAndExpenses" />
                </form>
            </div>
        )
    }
}

export default Modal;
