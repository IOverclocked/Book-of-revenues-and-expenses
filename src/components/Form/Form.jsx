import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  toggleModal as actionToggleModal,
  add as actionAdd,
  edit as actionEdit,
} from 'actions/actions';
import Input from 'components/Input/Input';
import Radio from 'components/Radio/Radio';
import NavButton from 'components/NavButton/NavButton';
import styles from './Form.module.scss';

class Form extends Component {
  static propTypes = {
    btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    initData: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      cash: PropTypes.number,
      desc: PropTypes.string,
      er: PropTypes.string,
    }),
    add: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    initData: {
      id: '',
      title: '',
      date: '',
      cash: '',
      desc: '',
      er: '',
    },
  };

  getTodayDate = () => {
    const D = new Date();
    const y = D.getFullYear();
    let m = D.getMonth() + 1;
    let d = D.getDate();

    m = m < 10 ? `0${m}` : m;
    d = d < 10 ? `0${d}` : d;

    return `${d}/${m}/${y}`;
  };

  addSubmit = formData => {
    const { add, toggleModal } = this.props;
    const newItem = {
      id: uuid.v1(),
      ...formData,
    };
    newItem.cash = Number(newItem.cash);
    newItem.date = !newItem.date ? this.getTodayDate() : newItem.date;
    add({ ...newItem });
    toggleModal();
  };

  editSubmit = formData => {
    const { edit, toggleModal } = this.props;
    edit(formData.id, formData);
    toggleModal();
  };

  submit = fromData => {
    const { title } = this.props;
    switch (title) {
      case 'Add':
        this.addSubmit(fromData);
        break;
      case 'Edit':
        this.editSubmit(fromData);
        break;
      default:
        break;
    }
  };

  componentDidMount = () => {
    const { initData, initialize } = this.props;
    initialize(initData);
  };

  render() {
    const { btns, handleSubmit } = this.props;
    return (
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(this.submit)}>
          <Field
            tag="input"
            type="text"
            name="title"
            label="Title"
            maxLength="10"
            component={Input}
          />

          <Field tag="input" type="date" name="date" label="Date" component={Input} />

          <Field tag="input" type="text" name="cash" label="Cash" component={Input} />

          <Field tag="textarea" name="desc" label="Description" maxLength="400" component={Input} />

          <div className={styles.radios}>
            <Field
              name="er"
              label="Expenses"
              props={{ value: 'expenses', name: 'er' }}
              component={Radio}
            />
            <Field
              name="er"
              label="Revenues"
              props={{ value: 'revenues', name: 'er' }}
              component={Radio}
            />
          </div>

          <div className={styles.btns}>
            {btns.map(btn => (
              <NavButton type="submit" key={btn.title} title={btn.title} />
            ))}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ view, main }) => ({
  btns: view.modal.btns,
  initData: view.modal.initData,
  list: main.list,
  title: view.modal.title,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: (toggle = false, title = '', btns = [], initData = {}) => {
    dispatch(actionToggleModal(toggle, title, btns, initData));
  },
  add: newItem => {
    dispatch(actionAdd(newItem));
  },
  edit: (id, newItem) => {
    dispatch(actionEdit(id, newItem));
  },
});

const validate = formData => {
  const { title, cash, desc } = formData;
  const errors = {};
  const cashReg = /^\$?(\d{1,7})(\.\d{1,2})?$/;

  errors.title = !title ? 'This field is required' : '';
  errors.desc = !desc ? 'This field is required' : '';

  if (!cash) {
    errors.cash = 'This field is required';
  } else if (!cashReg.test(cash)) {
    errors.cash = "This format isn't correct";
  }

  return errors;
};

export default reduxForm({
  form: 'form',
  validate,
})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Form),
);
