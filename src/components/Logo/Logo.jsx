import React from 'react';
import style from './Logo.module.scss';
import Money from '@material-ui/icons/AttachMoney';

const Logo = ({ isStartView }) => (
    <> {isStartView
        ?
        <div className={style.wrapper__start} >
            <p className={style.book__start}>Book</p>
            <div className={style.middleWrapper__start}>
                <Money className={style.icon__start} />
                <p className={style.of__start}>of</p>
                <div className={style.internalWrapper__start}>
                    <p className={style.revenues__start}>revenues</p>
                    <p className={style.and__start}>&</p>
                    <p className={style.expenses__start}>expenses</p>
                </div>
            </div>
        </div>
        :
        <div className={style.wrapper__home} >
            <Money className={style.iconLeft__home} />
            <Money className={style.iconRight__home} />
            <p className={style.book__home}>Book</p>
            <p className={style.of__home}>of</p>
            <div className={style.internalWrapper__home}>
                <p className={style.revenues__home}>revenues</p>
                <p className={style.and__home}>&</p>
                <p className={style.expenses__home}>expenses</p>
            </div>
        </div>
    } </>

);

export default Logo;
