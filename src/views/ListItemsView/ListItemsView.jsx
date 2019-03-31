import React, { Component } from 'react';
import Style from './ListItemsView.module.scss';
import ListItem from '../../components/ListItem/ListItem';

export class ListItemsView extends Component {
    state = {
        list: [{
            title: 'title',
            date: '01-01-2019',
            desc: 'descasdddddddddddddddddddddasdddddddddasdddd',
            cash: '139.99',
            revenues: false,
            expenses: true
        }, {
            title: 'title',
            date: '01-01-2019',
            desc: 'desc',
            cash: '139.99',
            revenues: true,
            expenses: false
        }]
    }
    render() {
        const { list } = this.state;
        return (
            <ul className={Style.wrapper}>
                {
                    list.map(item => <ListItem item={item} />)
                }
            </ul>
        )
    }
}

export default ListItemsView
