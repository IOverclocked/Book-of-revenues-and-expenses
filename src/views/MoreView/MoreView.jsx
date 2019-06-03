import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoreView.module.scss';
import NavButton from '../../components/NavButton/NavButton';

const MoreView = ({ details, btns, toggleModal, del }) => {
  const { id, title, date, cash, desc, er } = details;
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={er === 'expenses' ? styles.wrapper__expenses : styles.wrapper__revenues}>
          <span className={styles.date}>{date}</span>
          <span className={styles.cash}>{cash}</span>
        </h3>
      </header>
      <article className={styles.desc}>{desc}</article>
      <div className={styles.wrapper__buttons}>
        {btns.map(btn => (
          <NavButton
            key={btn.title}
            title={btn.title}
            onClick={() => {
              if (btn.title === 'Edit') {
                toggleModal();
                toggleModal('Edit', details);
              } else {
                del(id);
                toggleModal();
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

MoreView.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    cash: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    er: PropTypes.string.isRequired,
  }).isRequired,
  btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  toggleModal: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
};

export default MoreView;
