const r = localStorage.getItem('Result');
const initState = r ? JSON.parse(r) : {
    result: 0,
    expenses: 0,
    revenues: 0
}

const update = (state, action) => {
    let expenses = 0;
    let revenues = 0;
    let result = 0;
    action.list.forEach(item => {
        if (item.expenses) {
            expenses += item.cash;
            result -= item.cash;
        } else {
            revenues += item.cash;
            result += item.cash;
        } 
    });    
    return {
        ...state,
        result,
        expenses,
        revenues
    }
} 

const result = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE': 
            localStorage.setItem('Result', JSON.stringify(update(state, action)));
            return update(state, action);
        default:
            return state;
    }
}

export default result;