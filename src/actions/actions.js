//Actions for main reducers
const ADD = 'ADD';

export const add = (newItem) => {
    return {
        type: ADD,
        newItem
    }
}

//Actions for state reducers
const EXPENSES = 'EXPENSES';
const REVENUES = 'REVENUES';

export const expenses = (expenses) => {
    return {
        type: EXPENSES,
        expenses
    }
}

export const revenues = (revenues) => {
    return {
        type: REVENUES,
        revenues
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