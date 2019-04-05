
const initState = {
    start: {
        open: true,
    },
    modal: {
        toggle: false
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
            toggle: action.control
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