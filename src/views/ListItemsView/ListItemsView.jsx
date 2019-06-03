import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  toggleNavigation as actionToggleNavigation,
  toggleModal as actionToggleModal,
  del as actionDel,
} from 'actions/actions';
import ListItem from 'components/ListItem/ListItem';
import StateLabel from 'components/StateLabel/StateLabel';
import PropTypes from 'prop-types';

class ListItemsView extends Component {
  static propTypes = {
    toggleNavigation: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      id: PropTypes.string.isRequired,
      open: PropTypes.bool.isRequired,
    }).isRequired,
    result: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.object),
  };

  static defaultProps = {
    list: [],
  };

  handleClickOnItem = (e, item) => {
    const { id } = item;
    const { tagName, title } = e.target;
    const { toggleModal, toggleNavigation, del, navigation } = this.props;
    if (tagName === 'BUTTON') {
      switch (title) {
        case 'Edit':
          toggleModal('Edit', item);
          break;
        case 'Delete':
          del(id);
          toggleNavigation(id);
          break;
        case 'More':
          toggleModal('More', item);
          break;
        default:
          break;
      }
    } else {
      toggleNavigation(id !== navigation.id ? id : '0');
    }
  };

  render() {
    const {
      list,
      result,
      navigation: { id },
    } = this.props;
    return (
      <>
        <StateLabel result={result} />
        <ul>
          {list.map(item => {
            return (
              <ListItem
                id={item.id}
                key={item.id}
                item={item}
                isOpenNav={item.id === id}
                onClick={e => this.handleClickOnItem(e, item)}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

const mapStateToProps = ({ view, main }) => ({
  list: main.list,
  navigation: view.navigation,
  result: main.result,
});

const mapDispatchToProps = dispatch => ({
  toggleNavigation: id => {
    dispatch(actionToggleNavigation(id));
  },
  toggleModal: (modalType, initData) => {
    dispatch(actionToggleModal(modalType, initData));
  },
  del: id => {
    dispatch(actionDel(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListItemsView);
