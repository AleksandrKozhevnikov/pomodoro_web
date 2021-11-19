
const initialState = {
    test: 2
}


export const TestReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case('TEST'):
            return {test: 4}
        default: return state
    }
}