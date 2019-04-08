
const initState = {
    start: {
        open: true,
    },
    modal: {
        title: '',
        toggle: false,
        btns: [{ title: ''}]
    },
    navigation: {
        id: '',
        open: false
    }
}

const startApp = (state) => {
    return {
        ...state,
        start: {
            open: !state.start.open
        } 
    }
}

const toggleModal = (state, action) => {
    return {
        ...state,
        modal: {
            toggle: action.toggle,
            title: action.title,
            btns: action.btns,
            initData: action.initData
        }
    }
}

const toggleNavigation = (state, action) => {
    return {
        ...state,
        navigation: {
            id: action.id,
            open: !state.navigation.open,
        }
    }
}

const view = (state = initState, action) => {
    switch (action.type) {
        case 'START_APP':
            return startApp(state);
        case 'TOGGLE_MODAL': 
            return toggleModal(state, action);
        case 'TOGGLE_NAVIGATION': 
            return toggleNavigation(state, action);
        default:
            return state;
    }
}

export default view;