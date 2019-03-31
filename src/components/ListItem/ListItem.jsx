import React from 'react';
import PropTypes from 'prop-types';
import Style from './ListItem.module.scss';
import NavButton from '../../components/NavButton/NavButton';

const ListItem = ({ item, ...props }) => (
    <li className={item.expenses ?
        `${Style.wrapper__expenses} ${Style.wrapper}` :
        `${Style.wrapper__revenues} ${Style.wrapper}`} {...props}>
        <section className={Style.section__nav}>
            <NavButton
                type={item.expenses ? 'expenses' : 'revenues'}
                desc='Edit'
            />
            <NavButton
                type={item.expenses ? 'expenses' : 'revenues'}
                desc='Delete'
            />
            <NavButton
                type={item.expenses ? 'expenses' : 'revenues'}
                desc='More'
            />
            <NavButton
                type={item.expenses ? 'expenses' : 'revenues'}
                desc='Close'
            />
        </section>
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

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ListItem;
