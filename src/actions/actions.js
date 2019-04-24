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
const TOGGLE_SIDE_MENU = 'TOGGLE_SIDE_MENU';

export const startApp = () => {
    return {
        type: START_APP
    }
}

export const toggleModal = (modalType, initData) => {
    return {
        type: TOGGLE_MODAL,
        modalType,
        initData
    }
}

export const toggleNavigation = (id) => {
    return {
        type: TOGGLE_NAVIGATION,
        id
    }
}

export const toggleSideMenu = () => {
    return {
        type: TOGGLE_SIDE_MENU
    }
}