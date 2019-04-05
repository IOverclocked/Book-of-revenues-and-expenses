import React from 'react';
import styles from './StartView.module.scss';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';

const StartView = ({ goToHomeView }) => (
    <div className={styles.wrapper}>
        <Logo isStartView />
        <section className={styles.buttonWrapper}>
            <button className={styles.button} onClick={goToHomeView}>Let's get going</button>
        </section>
    </div >
)

StartView.propTypes = {
    goToHomeView: PropTypes.func.isRequired
}

export default StartView;