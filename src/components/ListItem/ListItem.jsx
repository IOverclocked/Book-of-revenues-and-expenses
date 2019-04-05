import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import NavButton from '../../components/NavButton/NavButton';

const ListItem = ({ item, ...props }) => (
    <li className={item.expenses ?
        `${styles.wrapper__expenses} ${styles.wrapper}` :
        `${styles.wrapper__revenues} ${styles.wrapper}`} {...props}>
        <section className={styles.section__nav}>
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
        <section className={styles.section__desc}>
            <div className={styles.desc__header}>
                <div className={styles.header__date}>
                    {item.date}
                </div>
                <div className={styles.header__title}>
                    {item.title}
                </div>
            </div>
            <div className={styles.desc__desc}>
                {item.desc}
            </div>
        </section>
        <section className={styles.section__cash}>
            {item.cash}
        </section>
    </li>
)

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ListItem;
