
const initState = {
    start: {
        open: true,
    },
    modal: {
        title: '',
        toggle: false,
        btns: [{ title: '' }]
    },
    navigation: {
        id: '',
        open: false
    },
    sideMenu: {
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
    switch (action.modalType) {
        case 'Add': return {
            ...state,
            modal: {
                toggle: true,
                title: 'Add',
                btns: [{ title: 'Add' }],
                initData: action.initData
            }
        }
        case 'Edit': return {
            ...state,
            modal: {
                toggle: true,
                title: 'Edit',
                btns: [{ title: 'Confirm' }],
                initData: action.initData
            }
        }
        case 'More': return {
            ...state,
            modal: {
                toggle: true,
                title: 'More',
                btns: [{ title: 'Edit' }, { title: 'Delete' }],
                initData: action.initData
            }
        }
        default: return {
            ...state,
            modal: {
                toggle: false,
                title: undefined,
                btns: [],
                initData: {}
            }
        }
    }
}

const toggleSideMenu = (state) => {
    return {
        ...state,
        sideMenu: {
            toggle: !state.sideMenu.toggle
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
        case 'TOGGLE_SIDE_MENU':
            return toggleSideMenu(state);
        default:
            return state;
    }
}

export default view;