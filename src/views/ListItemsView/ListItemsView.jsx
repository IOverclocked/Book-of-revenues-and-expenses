import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ListItemsView.module.scss';
import ListItem from '../../components/ListItem/ListItem';

export class ListItemsView extends Component {
    //default hidden
    toggleVisibleNavigation = (
        navWrapper,
        pLeft = '-1000px',
        pRight = 'none',
        opacity = '0',
        visibility = 'hidden'
    ) => {
        navWrapper.style.left = pLeft;
        navWrapper.style.right = pRight;
        navWrapper.style.opacity = opacity;
        navWrapper.style.visibility = visibility;
    }

    handleShowNav = (e) => {
        const item = e.currentTarget;
        const nav = item.firstChild;
        const index = item.classList.length - 1;
        const wrappers = item.classList[index];
        const list = document.querySelectorAll(`.${wrappers}`);

        //hidden all
        list.forEach(item => {
            item.style.margin = '0.5em 0 0 0';
            const nav = item.firstChild;
            this.toggleVisibleNavigation(nav);
        });

        //show current item
        item.style.margin = '2.5em 0 0 0';
        this.toggleVisibleNavigation(nav, '10px', '10px', '1', 'visible');
    }

    render() {
        const { list } = this.props;
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

const mapStateToProps = (state) => {
    const { main: list } = state;
    return {
        list
    }
}

export default (connect(mapStateToProps))(ListItemsView);
