import React from 'react';
import { connect } from 'react-redux';
import { del, update } from '../../actions/actions';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import NavButton from '../../components/NavButton/NavButton';

const listButtons = ['Edit', 'Delete', 'More'];

const ListItem = ({ item, handleDel, handleUpdate, list, ...props }) => (
    <li className={item.expenses ?
        `${styles.wrapper__expenses} ${styles.wrapper}` :
        `${styles.wrapper__revenues} ${styles.wrapper}`} {...props}>
        <section className={styles.section__nav}>
            {
                listButtons.map(title => <NavButton
                    key={title}
                    title={title}
                    classType={item.expenses ? 'expenses' : 'revenues'}
                    onClick={async (e) => {
                        switch (title) {
                            case 'Delete': 
                                await handleDel(item.id); 
                                await handleUpdate(list);
                                break;
                            default:
                                break;
                        }
                    }}
                />)
            }
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

const mapStateToProps = (state) => {
    const { main: list} = state;
    return {
        list
    }
}   

const mapDispatchToProps = (dispatch) => {
    return {
        handleDel: (id) => {
            dispatch(del(id))
        },
        handleUpdate: (list) => {
            dispatch(update(list))
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(ListItem);
