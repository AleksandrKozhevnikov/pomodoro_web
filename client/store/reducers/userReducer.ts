import {UserAction, UserActionTypes, UserState, UserData} from '../../types/user'


const initialUserData: UserData = {
    id: 0,
    email: '',
    nickname: '',
    banned: false,
    banReason: '',
    open: false,
    level: 1,
    totalPoints: 0
}
const initialState: UserState = {
    isLogin: false,
    userEmail: '',
    userNick: '',
    loading: false,
    error: '',
    success: false,
    emailCheckLoading: false,
    emailCheckError: '',
    nicknameCheckLoading: false,
    nicknameCheckError: '',
    userData: initialUserData
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {

        // userRegistration
        case UserActionTypes.USER_REGISTRATION_LOADING:
                return {...state, loading: true}
        case UserActionTypes.USER_REGISTRATION_ERROR:
                return {...state, error: action.payload}
        case UserActionTypes.USER_REGISTRATION_SUCCESS:
                return {...state, loading: false, success: true}

        // userLogin
        case UserActionTypes.USER_LOGIN_LOADING:
                return {...state, loading: true}
        case UserActionTypes.USER_LOGIN_ERROR:
                return {...state, error: action.payload}
        case UserActionTypes.USER_LOGIN_SUCCESS:
                return {...state, loading: false, success: true}

        // setUserData
        case UserActionTypes.USER_SET_IS_LOGIN:
                return {...state, isLogin: true}
        case UserActionTypes.USER_SET_IS_LOGOUT:
                return {...state, isLogin: false, userEmail: '', userNick: ''}
        case UserActionTypes.USER_SET_EMAIL:
                return {...state, userEmail: action.payload}
        case UserActionTypes.USER_SET_NICKNAME:
                return {...state, userNick: action.payload}
        case UserActionTypes.USER_SET_DATA:
                return {...state, userData: action.payload}

        // emailCheck
        case UserActionTypes.USER_EMAIL_CHECK_LOADING:
                return {...state, emailCheckLoading: true}
        case UserActionTypes.USER_EMAIL_CHECK_ERROR:
                return {...state, emailCheckError: action.payload}
        case UserActionTypes.USER_EMAIL_CHECK_SUCCESS:
                return {...state, emailCheckLoading: false, emailCheckError: ''}
                
        // nicknameCheck
        case UserActionTypes.USER_NICKNAME_CHECK_LOADING:
                return {...state, nicknameCheckLoading: true}
        case UserActionTypes.USER_NICKNAME_CHECK_ERROR:
                return {...state, nicknameCheckError: action.payload}
        case UserActionTypes.USER_NICKNAME_CHECK_SUCCESS:
                return {...state, nicknameCheckLoading: false, nicknameCheckError: ''}

        // resetState
        case UserActionTypes.RESET_AUTH_STATE:
                return {...initialState}
        default: return state
    }
}