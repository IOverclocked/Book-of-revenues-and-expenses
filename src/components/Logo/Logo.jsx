import React from 'react';
import style from './logo.module.scss';

const Logo = () => (

    <div className={style.wrapper}>
        <p className={style.book}>Book</p>
        <p className={style.of}>
            <span className={style.line}></span>
            of
            <span className={style.line}></span>
        </p>
        <div className={style.bottomWrapper}>
            <p className={style.revenues}>revenues</p>
            <p className={style.and}>$&nbsp;</p>
            <p className={style.expenses}>expenses</p>
        </div>
    </div>

);

export default Logo;
