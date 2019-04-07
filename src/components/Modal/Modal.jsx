import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, add } from '../../actions/actions';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';
import Input from '../Input/Input';
import ModalHeader from '../ModalHeader/ModalHeader';
import NavButton from '../NavButton/NavButton';
import { Formik } from 'formik';

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

    getTodayDate = () => {
        const D = new Date();
        let y = D.getFullYear();
        let m = D.getMonth() + 1;
        let d = D.getDate();

        m = m < 10 ? `0${m}` : m;
        d = d < 10 ? `0${d}` : d;

        return `${d}/${m}/${y}`;
    }

    handleAddSubmit = async (e) => {
        e.preventDefault();
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
                    <Formik
                        initialValues={{ title, date, cash, desc }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        validate={(values) => {
                            const { title, cash, desc } = values;
                            let errors = {};
                            const cashReg = /^([1-9]{1}\d{0,5})+([.]?[0-9]{1,2})|([0]{1})+([.]?[0-9]{1,2})|([1-9]{1}\d{0,5})$/;

                            errors.title = !title ? 'This field is required' : '';
                            errors.desc = !desc ? 'This field is required' : '';

                            if (!cash) {
                                errors.cash = 'This field is required';
                            } else if (!cashReg.test(cash)) {
                                errors.cash = 'This format isn\'t correct';
                            }

                            return errors;
                        }}
                        render={({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                                <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
                                    <Input tag="input" type="text" name="title" maxLength="10"
                                        value={values.title}
                                        onChange={handleChange}
                                        errors={errors.title} />

                                    <Input tag="input" type="date" name="date"
                                        value={values.date}
                                        onChange={handleChange} />

                                    <Input tag="input" type="text" name="cash"
                                        value={values.cash}
                                        onChange={handleChange}
                                        errors={errors.cash} />

                                    <Input tag="textarea" name="desc" maxLength="400"
                                        value={values.desc}
                                        onChange={handleChange}
                                        errors={errors.desc} />

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
                            )}
                    />
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

