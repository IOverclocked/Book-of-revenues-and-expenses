import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import StateDetails from 'components/StateDetails/StateDetails';
import ListDetails from 'components/ListDetails/ListDetails';
import styles from './DetailsView.module.scss';

class DetailsView extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object.isRequired),
    result: PropTypes.string,
    expenses: PropTypes.string,
    revenues: PropTypes.string,
  };

  static defaultProps = {
    list: [],
    result: '0',
    expenses: '0',
    revenues: '0',
  };

  state = {
    listExpenses: [],
    listRevenues: [],
  };

  componentDidMount = () => {
    const { list } = this.props;
    this.setState({
      listExpenses: list.filter(el => el.er === 'expenses'),
      listRevenues: list.filter(el => el.er === 'revenues'),
    });
  };

  render() {
    const { result, expenses, revenues } = this.props;
    const { listExpenses, listRevenues } = this.state;
    return (
      <div className={styles.wrapper}>
        <Header />
        <StateDetails result={result} expenses={expenses} revenues={revenues} />
        <div className={styles.listWrapper}>
          <ListDetails list={listRevenues} />
          <ListDetails list={listExpenses} isExpenses />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ list, result, expenses, revenues }) => ({
  list,
  result,
  expenses,
  revenues,
});

export default connect(mapStateToProps)(DetailsView);
