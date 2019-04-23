import React from 'react';
import styles from './StartView.module.scss';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';

const StartView = ({ handleStartApp }) => (
    <div className={styles.wrapper}>
        <Logo isStartView />
        <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={handleStartApp}>Let's get going</button>
        </div>
    </div >
)

StartView.propTypes = {
    handleStartApp: PropTypes.func.isRequired
}

export default StartView;