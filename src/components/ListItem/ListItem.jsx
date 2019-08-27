import React from 'react';
import PropTypes from 'prop-types';
import NavButton from 'components/NavButton/NavButton';
import styles from './ListItem.module.scss';

const listButtons = ['Edit', 'Delete', 'More'];

const ListItem = ({ item, isOpenNav, ...props }) => (
  <li className={isOpenNav ? styles[`${item.er}_open`] : styles[item.er]} {...props}>
    <section className={isOpenNav ? styles.nav_open : styles.nav_close}>
      {listButtons.map(title => (
        <NavButton key={title} title={title} classType={item.er} />
      ))}
    </section>
    <section className={styles.section_desc}>
      <div className={styles.section_desc__header}>
        <div className={styles.section_desc__date}>{item.date}</div>
        <div className={styles.section_desc__title}>{item.title}</div>
      </div>
      <div className={styles.section_desc__desc}>{item.desc}</div>
    </section>
    <section className={styles.section_cash}>{item.cash}</section>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cash: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    er: PropTypes.string.isRequired,
  }).isRequired,
  isOpenNav: PropTypes.bool,
};

ListItem.defaultProps = {
  isOpenNav: false,
};

export default ListItem;
