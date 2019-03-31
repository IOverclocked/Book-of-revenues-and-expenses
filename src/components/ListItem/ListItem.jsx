import React from 'react';
import Style from './ListItem.module.scss';

const ListItem = ({ item }) => (
    <li className={item.expenses ?
        Style.wrapper__expenses :
        Style.wrapper__revenues}>
        <section className={Style.section__desc}>
            <div className={Style.desc__header}>
                <div className={Style.header__date}>
                    {item.date}
                </div>
                <div className={Style.header__title}>
                    {item.title}
                </div>
            </div>
            <div className={Style.desc__desc}>
                {item.desc}
            </div>
        </section>
        <section className={Style.section__cash}>
            {item.cash}
        </section>
    </li>
)

export default ListItem
