

export interface UserRegDto {
    email: string,
    password: string,
    nickName: string
}

export interface UserLogDto {
    email: string,
    password: string
}

export interface UserData {
    id: number,
    email: string,
    nickname: string,
    banned: boolean,
    banReason: string | null,
    open: boolean,
    level: number,
    totalPoints: number,
    totalStarts: number,
    totalConcentration: number,
    dayConcentration: string
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
    userData: UserData
}

export enum UserActionTypes {
    USER_REGISTRATION_LOADING = 'USER_REGISTRATION_LOADING',
    USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR',
    USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',

    USER_LOGIN_LOADING = 'USER_LOGIN_LOADING',
    USER_LOGIN_ERROR = 'USER_LOGIN_ERROR',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',

    USER_SET_EMAIL = 'USER_SET_EMAIL',
    USER_SET_NICKNAME = 'USER_SET_NICKNAME',
    USER_SET_IS_LOGIN= 'USER_SET_IS_LOGIN',
    USER_SET_IS_LOGOUT= 'USER_SET_IS_LOGOUT',
    USER_SET_IS_ONLINE = 'USER_SET_IS_ONLINE',
    USER_SET_DATA = 'USER_SET_DATA',

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
}

// setUserEmail/Login/Status

interface UserSetIsLoginAction {
    type: UserActionTypes.USER_SET_IS_LOGIN
}

interface UserSetIsLogoutAction {
    type: UserActionTypes.USER_SET_IS_LOGOUT
}

interface UserSetIsOnlineAction {
    type: UserActionTypes.USER_SET_IS_ONLINE
}

interface UserSetDataAction {
    type: UserActionTypes.USER_SET_DATA,
    payload: any
}


interface UserSetEmailAction {
    type: UserActionTypes.USER_SET_EMAIL
    payload: string
}

interface UserSetNicknameAction {
    type: UserActionTypes.USER_SET_NICKNAME
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
    UserResetStateAction |
    UserSetEmailAction |
    UserSetNicknameAction |
    UserSetIsLogoutAction |
    UserSetIsLoginAction |
    UserSetIsOnlineAction |
    UserSetDataAction
    