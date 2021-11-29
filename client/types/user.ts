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
}

export enum UserActionTypes {
    USER_REGISTRATION = 'USER_REGISTRATION',
    USER_REGISTRATION_LOADING = 'USER_REGISTRATION_LOADING',
    USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR',
    USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS',
    USER_LOGIN = 'USER_LOGIN'
}

interface UserRegistrationAction {
    type: UserActionTypes.USER_REGISTRATION
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

interface UserLoginAction {
    type: UserActionTypes.USER_LOGIN
    payload: userLogDto
}


export type UserAction = 
    UserRegistrationAction | 
    UserRegistrationLoadingAction | 
    UserRegistrationErrorAction |
    UserRegistrationSuccessAction | 
    UserLoginAction