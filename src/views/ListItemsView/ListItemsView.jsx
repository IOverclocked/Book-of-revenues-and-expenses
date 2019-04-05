import React, { Component } from 'react';
import uuid from 'uuid';
import styles from './ListItemsView.module.scss';
import ListItem from '../../components/ListItem/ListItem';

export class ListItemsView extends Component {
    state = {
        list: [{
            id: uuid.v1(),
            title: 'title',
            date: '01-01-2019',
            desc: 'descasdddddddddddddddddddddasdddddddddasdddd',
            cash: '139.99',
            revenues: false,
            expenses: true
        }, {
            id: uuid.v1(),
            title: 'title',
            date: '01-01-2019',
            desc: 'desc',
            cash: '139.99',
            revenues: true,
            expenses: false
        }, {
            id: uuid.v1(),
            title: 'title',
            date: '01-01-2019',
            desc: 'desc',
            cash: '139.99',
            revenues: true,
            expenses: false
        }]
    }

    //default hidden
    toggleVisibleNavigation = (
        navWrapper,
        pLeft = '-1000px',
        pRight = 'none',
        opacity = '0',
        visibility = 'hidden'
    ) => {
        navWrapper.styles.left = pLeft;
        navWrapper.styles.right = pRight;
        navWrapper.styles.opacity = opacity;
        navWrapper.styles.visibility = visibility;
    }

    handleShowNav = (e) => {
        const item = e.currentTarget;
        const nav = item.firstChild;
        const index = item.classList.length - 1;
        const wrappers = item.classList[index];
        const list = document.querySelectorAll(`.${wrappers}`);

        //hidden all
        list.forEach(item => {
            item.styles.margin = '0.5em 0 0 0';
            const nav = item.firstChild;
            this.toggleVisibleNavigation(nav);
        });

        //show current item
        item.styles.margin = '2.5em 0 0 0';
        this.toggleVisibleNavigation(nav, '10px', '10px', '1', 'visible');
    }

    render() {
        const { list } = this.state;
        return (
            <ul className={styles.wrapper}>
                {
                    list.map(item => {
                        return (
                            <ListItem
                                id={item.id}
                                key={item.id}
                                item={item}
                                onClick={this.handleShowNav}
                            />)
                    })
                }
            </ul>
        )
    }
}

export default ListItemsView;
