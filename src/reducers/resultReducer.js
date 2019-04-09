const r = localStorage.getItem('Result');
const initState = r ? JSON.parse(r) : {
    result: 0,
    expenses: 0,
    revenues: 0
}

const expenses = (state, action) => {
    return {
        ...state,
        result: (state.result - action.expenses).toFixed(2),
        expenses: state.expenses + action.expenses
    }
}

const revenues = (state, action) => {
    return {
        ...state,
        result: state.result + action.revenues,
        revenues: state.revenues + action.revenues
    }
}

const result = (state = initState, action) => {
    switch (action.type) {
        case 'EXPENSES':
            localStorage.setItem('Result', JSON.stringify(expenses(state, action)));
            return expenses(state, action);
        case 'REVENUES':
            localStorage.setItem('Result', JSON.stringify(revenues(state, action)));
            return revenues(state, action);
        default:
            return state;
    }
}

export default result;