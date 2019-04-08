
const initState = {
    result: 0,
    expenses: 0,
    revenues: 0
};

const expenses = (state, action) => {
    return {
        ...state,
        result: state.result - action.expenses,
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
            return expenses(state, action);
        case 'REVENUES':
            return revenues(state, action);
        default:
            return state;
    }
}

export default result;