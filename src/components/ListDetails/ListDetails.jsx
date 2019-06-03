import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListDetails.module.scss';

const ListDetails = ({ isExpenses }) => (
  <section className={isExpenses ? styles.expenses : styles.revenues}>
    <header className={styles.header}>
      <h2 className={styles.title}>{isExpenses ? 'Expenses' : 'Revenues'}</h2>
    </header>
    {/* <ul className={styles.list}> */}
    {/* {list.map(el => <li key={el.id}></li>)} */}
    {/* </ul> */}
  </section>
);

ListDetails.propTypes = {
  isExpenses: PropTypes.bool,
  // list: PropTypes.arrayOf(PropTypes.object.isRequired),
};

ListDetails.defaultProps = {
  // list: [],
  isExpenses: false,
};

export default ListDetails;
