import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal, add, edit } from '../../actions/actions';
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
        initialData: PropTypes.object,
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

    handleAddSubmit = async (formData) => {
        const { handleAdd, handleToggleModal } = this.props;
        const newItem = {
            id: uuid.v1(),
            ...formData
        }
        newItem.cash = Number(newItem.cash);
        newItem.date = !newItem.date ? this.getTodayDate() : newItem.date;
        await handleAdd({ ...newItem });
        handleToggleModal();
    }

    handleEditSubmit = async (formData) => {
        const { handleEdit, handleToggleModal } = this.props;
        handleEdit(formData.id, formData);
        handleToggleModal();
    }

    _handleSubmit = (fromData) => {
        const { title } = this.props;
        switch (title) {
            case 'Add':
                this.handleAddSubmit(fromData);
                break;
            case 'Edit':
                this.handleEditSubmit(fromData);
                break;
            default:
                break;
        }
    }

    componentDidMount = () => {
        const { initData, initialize } = this.props;
        initData && initialize(initData);
    }

    render() {
        const { btns, handleSubmit } = this.props;
        return (
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit(this._handleSubmit)}>

                    <Field tag="input" type="text" name="title" label="Title" maxLength="10" component={Input} />

                    <Field tag="input" type="date" name="date" label="Date" component={Input} />

                    <Field tag="input" type="text" name="cash" label="Cash" component={Input} />

                    <Field tag="textarea" name="desc" label="Description" maxLength="400" component={Input} />

                    <div className={styles.radios}>
                        <Field name="er" label="Expenses" props={{ value: "expenses", name: 'er' }} component={Radio} />
                        <Field name="er" label="Revenues" props={{ value: "revenues", name: 'er' }} component={Radio} />
                    </div>

                    <div className={styles.btns}>
                        {btns.map(btn => <NavButton type="submit" key={btn.title} title={btn.title} />)}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { view, main } = state;
    return {
        btns: view.modal.btns,
        initData: view.modal.initData,
        list: main.list,
        title: view.modal.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleModal: (toggle = false, title = '', btns = [], initData = {}) => {
            dispatch(toggleModal(toggle, title, btns, initData))
        },
        handleAdd: (newItem) => {
            dispatch(add(newItem))
        },
        handleEdit: (id, newItem) => {
            dispatch(edit(id, newItem))
        }
    }
}

const validate = (formData) => {
    const { title, cash, desc } = formData;
    let errors = {};
    const cashReg = /^\$?(\d{1,7})(\.\d{1,2})?$/;

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