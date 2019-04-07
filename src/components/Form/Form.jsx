import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, add } from '../../actions/actions';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import uuid from 'uuid';
import Input from '../Input/Input';
import NavButton from '../NavButton/NavButton';

class Form extends Component {
    static propTypes = {
        btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        handleAdd: PropTypes.func.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
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

    handleAddSubmit = async () => {
        const { date } = this.state;
        const { handleAdd, handleToggleModal } = this.props;
        !date && await this.setState({ date: this.getTodayDate() });
        handleAdd({ ...this.state });
        handleToggleModal();
    }

    render() {
        const { title, date, cash, desc } = this.state;
        const { btns } = this.props;
        return (
            <div className={styles.wrapper}>
                <Formik
                    initialValues={{ title, date, cash, desc }}
                    onSubmit={(values) => console.log(values)}
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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { view } = state;
    return {
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

export default (connect(mapStateToProps, mapDispatchToProps))(Form);
