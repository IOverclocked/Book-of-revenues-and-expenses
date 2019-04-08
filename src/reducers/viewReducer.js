
const initState = {
    start: {
        open: true,
    },
    modal: {
        title: '',
        toggle: false,
        btns: [{ title: ''}]
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

const view = (state = initState, action) => {
    switch (action.type) {
        case 'START_APP':
            return startApp(state);
        case 'TOGGLE_MODAL': 
            return toggleModal(state, action);
        default:
            return state;
    }
}

export default view;