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

    getTodayDate = () => {
        const D = new Date();
        let y = D.getFullYear();
        let m = D.getMonth() + 1;
        let d = D.getDate();

        m = m < 10 ? `0${m}` : m;
        d = d < 10 ? `0${d}` : d;

        return `${d}/${m}/${y}`;
    }

    handleAddSubmit = async () => {
        const { date } = this.state;
        const { handleAdd, handleToggleModal } = this.props;
        !date && await this.setState({ date: this.getTodayDate() });
        handleAdd({ ...this.state });
        handleToggleModal();
    }


    render() {
        const { title, date, cash, desc } = this.state;
        const { headerTitle, btns, handleToggleModal } = this.props;
        return (
            <div className={styles.modal__wrapper}>
                <section className={styles.wrapper}>
                    <ModalHeader title={headerTitle} handleToggleModal={handleToggleModal} />
                    <form autoComplete="off" className={styles.form}>
                        <Input tag="input" type="text" name="title" value={title} onChange={this.handleChange} required />
                        <Input tag="input" type="date" name="date" value={date} onChange={this.handleChange} />
                        <Input tag="input" type="text" name="cash" value={cash} pattern="^([1-9]{1}\d{0,5})+([.,]?[0-9]{1,2})|([1-9]{1}\d{0,5})$" onChange={this.handleChange} required />
                        <Input tag="textarea" name="desc" value={desc} onChange={this.handleChange} required />
                        {/* <input className={styles.input} type="radio" name="revenuesAndExpenses" checked />
                            <input className={styles.input} type="radio" name="revenuesAndExpenses" /> */}
                        <section className={styles.btns}>
                            {btns.map(btn => {
                                return (
                                    <NavButton
                                        key={btn.title}
                                        title={btn.title}
                                        onSubmit={(e) => this.handleAddSubmit(e)}
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
