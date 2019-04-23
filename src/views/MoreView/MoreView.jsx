import React from 'react';
import styles from './MoreView.module.scss';
import PropTypes from 'prop-types';
import NavButton from '../../components/NavButton/NavButton';

const MoreView = ({ details, btns, handleToggleModal, handleDel }) => {
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
            <article className={styles.desc}>
                {desc}
            </article>
            <div className={styles.wrapper__buttons}>
                {btns.map(btn => <NavButton key={btn.title} title={btn.title} onClick={() => {
                    if (btn.title === 'Edit') {
                        handleToggleModal();
                        handleToggleModal('Edit', details);
                    } else {
                        handleDel(id);
                        handleToggleModal();
                    }
                }} />)}
            </div>
        </section>
    )
}

MoreView.propTypes = {
    details: PropTypes.object.isRequired,
    btns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    handleToggleModal: PropTypes.func.isRequired,
    handleDel: PropTypes.func.isRequired,
}

export default MoreView;
