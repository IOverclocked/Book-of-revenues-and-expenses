import React from 'react';
import style from './Start.module.scss';
import Logo from '../../components/Logo/Logo';

const Start = () => (
    <div className={style.wrapper}>
        <Logo />
        <section className={style.buttonWrapper}>
            <button className={style.button}>Let's get going</button>
        </section>
    </div >
)

export default Start;