import React from 'react';
import style from './StartView.module.scss';
import Logo from '../../components/Logo/Logo';

const StartView = ({ goToHomeView }) => (
    <div className={style.wrapper}>
        <Logo isStartView />
        <section className={style.buttonWrapper}>
            <button className={style.button} onClick={goToHomeView}>Let's get going</button>
        </section>
    </div >
)

export default StartView;