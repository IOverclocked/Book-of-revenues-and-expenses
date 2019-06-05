import React from 'react';
import PropTypes from 'prop-types';
import ListItemDetails from 'components/ListItemDetails/ListItemDetails';
import styles from './ListDetails.module.scss';

const ListDetails = ({ isExpenses, list }) => (
  <section className={isExpenses ? styles.wrapper__expenses : styles.wrapper__revenues}>
    <header className={styles.header}>
      <h2 className={styles.title}>{isExpenses ? 'Expenses' : 'Revenues'}</h2>
    </header>
    <ul className={styles.list}>
      {list.map(({ id, title, date, cash }) => (
        <ListItemDetails key={id} title={title} date={date} cash={cash} isExpenses={isExpenses} />
      ))}
    </ul>
  </section>
);

ListDetails.propTypes = {
  isExpenses: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.object.isRequired),
};

ListDetails.defaultProps = {
  list: [],
  isExpenses: false,
};

export default ListDetails;
