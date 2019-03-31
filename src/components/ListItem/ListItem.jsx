import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './ListItem.module.scss';

export class ListItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    handleShowNav = (e) => {
        const item = e.currentTarget;
        if (!this.showNav) {
            item.style.margin = '3em 0 0 0';
            this.showNav = true;
        } else {
            item.style.margin = '0.5em 0 0 0';
            this.showNav = false;
        }
    }

    render() {
        const { item } = this.props;
        return (
            <li className={item.expenses ?
                Style.wrapper__expenses :
                Style.wrapper__revenues} onClick={this.handleShowNav}>
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
    }
}

export default ListItem;
