import React from 'react';
import styles from './MoreView.module.scss';
import PropTypes from 'prop-types';
import NavButton from '../../components/NavButton/NavButton';

const MoreView = ({ details, btns }) => {
    const { title, date, cash, desc, er } = details;

    return (
        <section className={styles.wrapper}>
            <header className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={er === 'expenses' ? styles.wrapper__expenses : styles.wrapper__revenues}>
                    <span className={styles.date}>{date}</span>
                    <span className={styles.cash}>{cash}</span>
                </h3>
            </header>
            <section className={styles.desc}>
                {desc}
            </section>
            <section className={styles.wrapper__buttons}>
                {/* to do buttons */}
            </section>
        </section>
    )
}

MoreView.propTypes = {
    details: PropTypes.object.isRequired
}

export default MoreView;
