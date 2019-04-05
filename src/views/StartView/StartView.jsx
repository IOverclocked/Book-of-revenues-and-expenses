import React from 'react';
import styles from './StartView.module.scss';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';

const StartView = ({ startApp }) => (
    <div className={styles.wrapper}>
        <Logo isStartView />
        <section className={styles.buttonWrapper}>
            <button className={styles.button} onClick={startApp}>Let's get going</button>
        </section>
    </div >
)

StartView.propTypes = {
    startApp: PropTypes.func.isRequired
}

export default StartView;