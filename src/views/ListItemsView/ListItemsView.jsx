import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNavigation } from '../../actions/actions';
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

    showNav = (item, nav) => {
        const { handleToggleNavigation } = this.props;
        handleToggleNavigation(item.id);
        item.style.margin = '2.5em 0 0 0';
        this.toggleVisibleNavigation(nav, '10px', '10px', '1', 'visible');
    }

    hideNav = (list, navId) => {
        const { handleToggleNavigation } = this.props;
        handleToggleNavigation('');
        list.forEach(item => {
            if (item.id === navId) {
                item.style.margin = '0.5em 0 0 0';
                const nav = item.firstChild;
                this.toggleVisibleNavigation(nav);
            }
        });
    }

    handleToggle = (e) => {
        const { navigation: { id, open } } = this.props;
        const item = e.currentTarget;
        const nav = item.firstChild;
        const index = item.classList.length - 1;
        const wrappers = item.classList[index];
        const list = document.querySelectorAll(`.${wrappers}`);

        if (!id && !open) {
            this.showNav(item, nav);
        } else if (id === item.id) {
            this.hideNav(list, id);
        } else {
            this.hideNav(list, id);
            this.showNav(item, nav);
        }
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
                                onClick={this.handleToggle}
                            />)
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    const { main: list, view } = state;
    return {
        list,
        navigation: view.navigation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleToggleNavigation: (id) => {
            dispatch(toggleNavigation(id))
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps))(ListItemsView);
