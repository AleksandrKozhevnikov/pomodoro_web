export interface userRegDto {
    email: string,
    password: string,
    nickName: string
}

export interface userLogDto {
    email: string,
    password: string
}

export interface UserState {
    isLogin: boolean
    userEmail: string
    userNick: string
    loading: boolean
    error: string
    success: boolean
    emailCheckLoading: boolean
    emailCheckError: string
    nicknameCheckLoading: boolean
    nicknameCheckError: string
    token: string
}

export enum UserActionTypes {
    USER_REGISTRATION_LOADING = 'USER_REGISTRATION_LOADING',
    USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR',
    USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',

    USER_LOGIN_LOADING = 'USER_LOGIN_LOADING',
    USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',

    USER_EMAIL_CHECK_LOADING = 'USER_EMAIL_CHECK_LOADING',
    USER_EMAIL_CHECK_SUCCESS = 'USER_EMAIL_CHECK_SUCCESS',
    USER_EMAIL_CHECK_ERROR = 'USER_EMAIL_CHECK_ERROR',

    USER_NICKNAME_CHECK_LOADING = 'USER_NICKNAME_CHECK_LOADING',
    USER_NICKNAME_CHECK_SUCCESS = 'USER_NICKNAME_CHECK_SUCCESS',
    USER_NICKNAME_CHECK_ERROR = 'USER_NICKNAME_CHECK_ERROR',

    RESET_AUTH_STATE = 'RESET_AUTH_STATE'
}


interface UserRegistrationLoadingAction {
    type: UserActionTypes.USER_REGISTRATION_LOADING
}

interface UserRegistrationErrorAction {
    type: UserActionTypes.USER_REGISTRATION_ERROR
    payload: string
}

interface UserRegistrationSuccessAction {
    type: UserActionTypes.USER_REGISTRATION_SUCCESS
}

// login


interface UserLoginLoadingAction {
    type: UserActionTypes.USER_LOGIN_LOADING
}

interface UserLoginErrorAction {
    type: UserActionTypes.USER_LOGIN_ERROR
    payload: string
}

interface UserLoginSuccessAction {
    type: UserActionTypes.USER_LOGIN_SUCCESS
    payload: string
}

// emailCheck


interface UserEmailCheckLoadingAction {
    type: UserActionTypes.USER_EMAIL_CHECK_LOADING
}

interface UserEmailCheckSuccessAction {
    type: UserActionTypes.USER_EMAIL_CHECK_SUCCESS
}

interface UserEmailCheckErrorAction {
    type: UserActionTypes.USER_EMAIL_CHECK_ERROR
    payload: string
}

// nicknameCheck


interface UserNicknameCheckLoadingAction {
    type: UserActionTypes.USER_NICKNAME_CHECK_LOADING
}

interface UserNicknameCheckSuccessAction {
    type: UserActionTypes.USER_NICKNAME_CHECK_SUCCESS
}

interface UserNicknameCheckErrorAction {
    type: UserActionTypes.USER_NICKNAME_CHECK_ERROR
    payload: string
}

// reset

interface UserResetStateAction {
    type: UserActionTypes.RESET_AUTH_STATE
}



export type UserAction = 
    UserRegistrationLoadingAction | 
    UserRegistrationErrorAction |
    UserRegistrationSuccessAction | 
    UserLoginLoadingAction |
    UserLoginErrorAction |
    UserLoginSuccessAction |
    UserEmailCheckLoadingAction |
    UserEmailCheckSuccessAction |
    UserEmailCheckErrorAction |
    UserNicknameCheckLoadingAction |
    UserNicknameCheckErrorAction |
    UserNicknameCheckSuccessAction |
    UserResetStateAction 
    