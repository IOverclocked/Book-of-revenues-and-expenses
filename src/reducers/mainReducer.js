// const l = localStorage.getItem('Main');
const l = undefined;

const template = {
    result: 0,
    expenses: 0,
    revenues: 0,
    list: []
}

const initState = l ? JSON.parse(l) : template;

const decimalTwoPrecision = (num) => {
    const temp = num.toFixed(2);
    const arr = temp.split('.');
    return arr[1].includes('00') ? arr[0] : temp;
}

const update = (list) => {
    let expenses = 0;
    let revenues = 0;
    let result = 0;
    list.forEach(item => {
        const i = Number(item.cash);
        if (item.expenses) {
            expenses += i;
            result -= i;
        } else {
            revenues += i;
            result += i;
        }
    });
    return {
        list,
        result: decimalTwoPrecision(result),
        expenses: decimalTwoPrecision(expenses),
        revenues: decimalTwoPrecision(revenues)
    }
}

const add = (state, action) => update([...state.list, action.newItem]);

const del = (state, action) => update(state.list.filter(el => el.id !== action.id));

const edit = (state, action) => update(state.list.map(el => el.id === action.id ? action.newItem : el));


const main = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            // localStorage.setItem('Main', JSON.stringify(add(state, action)));
            return add(state, action);
        case 'DEL':
            // localStorage.setItem('Main', JSON.stringify(del(state, action)));
            return del(state, action);
        case 'EDIT':
            // localStorage.setItem('Main', JSON.stringify(del(state, action)));
            return edit(state, action);
        default:
            return state;
    }
}

export default main;