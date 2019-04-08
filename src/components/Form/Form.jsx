import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, add } from '../../actions/actions';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';
import uuid from 'uuid';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import NavButton from '../NavButton/NavButton';

class Form extends Component {
    static propTypes = {
        btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        handleAdd: PropTypes.func.isRequired,
        handleToggleModal: PropTypes.func.isRequired,
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

    handleAddSubmit = (formData) => {
        console.log(formData);
        
        const { handleAdd, handleToggleModal } = this.props;
        const newItem = {
            id: uuid.v1(),
            revenues: formData.er === 'revenues' ? true : false,
            expenses: formData.er === 'expenses' ? true : false,
            ...formData
        }
        newItem.date = !newItem.date ? this.getTodayDate() : newItem.date;
        handleAdd({ ...newItem });
        handleToggleModal();
    }

    componentDidMount = () => {
        const { initData, initialize } = this.props;
        initData && initialize(initData);
    }

    render() {
        const { btns, handleSubmit } = this.props;
        return (
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit(this.handleAddSubmit)}>

                    <Field tag="input" type="text" name="title" label="Title" maxLength="10" component={Input} />

                    <Field tag="input" type="date" name="date" label="Date" component={Input} />

                    <Field tag="input" type="text" name="cash" label="Cash" component={Input} />

                    <Field tag="textarea" name="desc" label="Description" maxLength="400" component={Input} />

                    <section className={styles.radios}>
                        <Field name="er" label="Expenses" props={{ value: "expenses", name: 'er' }} component={Radio} />
                        <Field name="er" label="Revenues" props={{ value: "revenues", name: 'er' }} component={Radio} />
                    </section>
                   
                    <section className={styles.btns}>
                        {btns.map(btn => <NavButton
                            type="submit"
                            key={btn.title}
                            title={btn.title} 
                            />
                        )}
                    </section>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { view } = state;
    return {
        btns: view.modal.btns,
        initData: view.modal.initData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (toggle = false, title = '', btns = [], initData = {}) => {
            dispatch(toggleModal(toggle, title, btns, initData))
        },
        handleAdd: (newItem) => {
            dispatch(add(newItem))
        }
    }
}

const validate = (formData) => {
    const { title, cash, desc } = formData;
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
}

const decoratedForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default reduxForm({
    form: 'form',
    validate
})(decoratedForm);