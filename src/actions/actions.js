//Actions for main reducers
const ADD = 'ADD';

export const add = (newItem) => {
    return {
        type: ADD,
        newItem
    }
}

//Actions for view reducers
const START_APP = 'START_APP';
const TOGGLE_MODAL = 'TOGGLE_MODAL';

export const startApp = () => {
    return {
        type: START_APP
    }
}

export const toggleModal = (toggle, title) => {
    return {
        type: TOGGLE_MODAL,
        toggle,
        title,
    }
}