
const l = localStorage.getItem('Main');

const initState = l ? JSON.parse(l) : [];

const add = (state, action) => {
    return [...state, action.newItem];
}

const del = (state, action) => {
    return state.filter(s => s.id !== action.id);
}

const main = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('Main', JSON.stringify(add(state, action)));
            return add(state, action);
        case 'DEL':
            localStorage.setItem('Main', JSON.stringify(del(state, action)));
            return del(state, action);
        default:
            return state;
    }
}

export default main;