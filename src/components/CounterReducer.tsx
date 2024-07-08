const initialState = {
    counterValue: 0,
    max: 5,
    start: 0,
    disableBtn: false
}


export const counterReducer = (state = initialState, action: counterReducerActionsType) => {
    switch (action.type) {
        case 'INCREMENT-COUNTER':
            return {
                ...state,
                counterValue: state.counterValue < state.max ? state.counterValue + 1 : state.counterValue,
                disableBtn: state.counterValue >= state.max
            };
        case 'RESET-COUNTER':
            return {
                ...state,
                counterValue: state.start >= 0 ? state.start : state.counterValue
            }
        case 'SET-COUNTER-START':
            return {
                ...state,
                counterValue: state.start
            }
        case 'SET-MAX':
            return {
                ...state,
                max: action.payload.max
            }
        case  'SET-START':
            return {
                ...state,
                start: action.payload.start
            }
        case 'DISABLE-COUNTER-BTN':
            return {
                ...state,
                disableBtn: true
            }
        case 'SET-SUBMIT':
            return {
                ...state,
                counterValue: state.start,
                disableBtn: false
            }
    }
}

type counterReducerActionsType = incrementCounterType | resetCounterType | setCounterStartType | setMaxType | setStartType | disableCounterBtnType | setSubmitType

type incrementCounterType = {
    type: 'INCREMENT-COUNTER'
}

type resetCounterType = {
    type: 'RESET-COUNTER'
}

type setCounterStartType = {
    type: 'SET-COUNTER-START'
}

type setMaxType = {
    type: 'SET-MAX',
    payload: {
        max: number
    }
}

type setStartType = {
    type: 'SET-START',
    payload: {
        start: number
    }
}

type disableCounterBtnType = {
    type: 'DISABLE-COUNTER-BTN'
}

type setSubmitType = {
    type: 'SET-SUBMIT',
}

export const incrementCounterAC = () => {
    return {
        type: 'INCREMENT-COUNTER'
    } as const
}

export const resetCounterAC = () => {
    return {
        type: 'RESET-COUNTER'
    } as const
};

export const setCounterStartAC = () => {
    return {
        type: 'SET-COUNTER-START'
    } as const
};

export const disableCounterAC = () => {
    return {
        type: 'DISABLE-COUNTER-BTN'
    } as const
};

export const setMaxAC = (max: number) => {
    return {
        type: 'SET-MAX',
        payload: {
            max
        }
    } as const
}

export const setStartAC = (start: number) => {
    return {
        type: 'SET-START',
        payload: {
            start
        }
    } as const
}

export const setSubmitAC = () => {
    return {
        type: 'SET-SUBMIT',
    } as const
}

