
const add = (state, action) => {
    return [...state, action.newItem];
}

const main = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return add(state, action);
        default:
            return state;
    }
}

export default main;