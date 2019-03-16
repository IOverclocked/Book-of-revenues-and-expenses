import React from 'react';
import style from './Logo.module.scss';
import Money from '@material-ui/icons/AttachMoney';

const Logo = () => (
    <div className={style.wrapper}>
        <p className={style.book}>Book</p>
        <div className={style.middleWrapper}>
            <Money className={style.icon} />
            <p className={style.of}>of</p>
            <div className={style.internalWrapper}>
                <p className={style.revenues}>revenues</p>
                <p className={style.and}>&</p>
                <p className={style.expenses}>expenses</p>
            </div>
        </div>
    </div>

);

export default Logo;
