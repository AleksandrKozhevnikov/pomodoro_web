import {UserAction, UserActionTypes, UserState} from '../../types/user'

const initialState = {
    isLogin: false,
    userEmail: '',
    userNick: '',
    loading: false,
    error: ''
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.USER_REGISTRATION:
            return {...state}
        case UserActionTypes.USER_REGISTRATION_LOADING:
                return {...state, loading: true}
        case UserActionTypes.USER_REGISTRATION_ERROR:
                return {...state, error: action.payload}
        case UserActionTypes.USER_REGISTRATION_SUCCESS:
                return {...state, loading: false}
        default: return state
    }
}