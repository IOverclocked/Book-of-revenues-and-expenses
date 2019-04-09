
const l = localStorage.getItem('Main');
console.log(l);

const initState = l ? JSON.parse(l) : [];

const add = (state, action) => {
    return [...state, action.newItem];
}

const main = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            localStorage.setItem('Main', JSON.stringify(add(state, action)));
            return add(state, action);
        default:
            return state;
    }
}

export default main;