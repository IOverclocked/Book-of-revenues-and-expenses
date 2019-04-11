//Actions for main reducers
const ADD = 'ADD';
const DEL = 'DEL';
const EDIT = 'EDIT';

export const add = (newItem) => {
    return {
        type: ADD,
        newItem
    }
}

export const del = (id) => {
    return {
        type: DEL,
        id
    }
}

export const edit = (id, newItem) => {
    return {
        type: EDIT,
        id,
        newItem
    }
}

//Actions for view reducers
const START_APP = 'START_APP';
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';

export const startApp = () => {
    return {
        type: START_APP
    }
}

export const toggleModal = (toggle, title, btns, initData) => {
    return {
        type: TOGGLE_MODAL,
        toggle,
        title,
        btns,
        initData
    }
}

export const toggleNavigation = (id) => {
    return {
        type: TOGGLE_NAVIGATION,
        id
    }
}