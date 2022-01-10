import {UserAction, UserActionTypes, userLogDto, userRegDto} from '../../types/user'
import axios from 'axios'
import {Dispatch} from 'redux'
import {LOGIN_API_ROUTE, REGDATA_CHECK_API_ROUTE, REGISTRATION_API_ROUTE} from '../../utils/apiRoutes'



export const userRegistration = (userData: userRegDto) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.USER_REGISTRATION_LOADING})
                await axios(REGISTRATION_API_ROUTE, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: userData
                })
                    .then(() => {
                        dispatch({type: UserActionTypes.USER_REGISTRATION_SUCCESS})
                    })
                    .catch((res: string) => {
                        dispatch({type: UserActionTypes.USER_REGISTRATION_ERROR, payload: res})
                    })
        } catch(e: any) {
            dispatch({type: UserActionTypes.USER_REGISTRATION_ERROR, payload: e})
        }
    }
}

export const userLogin = (userData: userLogDto) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.USER_LOGIN_LOADING})
                await axios(LOGIN_API_ROUTE, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: userData
                })
                    .then((res: any) => {
                        dispatch({type: UserActionTypes.USER_LOGIN_SUCCESS, payload: res.data.token})
                    })
                    .catch((res: string) => {
                        dispatch({type: UserActionTypes.USER_LOGIN_ERROR, payload: res})
                    })
        } catch(e: any) {
            dispatch({type: UserActionTypes.USER_LOGIN_ERROR, payload: e})
        }
    }
}

export const userDataCheck = (type: string, value: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        if(type === 'email') {
            try {
                dispatch({type: UserActionTypes.USER_EMAIL_CHECK_LOADING})
                    await axios(REGDATA_CHECK_API_ROUTE, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {email: value}
                    })
                        .then(() => {
                            dispatch({type: UserActionTypes.USER_EMAIL_CHECK_SUCCESS})
                        })
                        .catch((res: any) => {
                            dispatch({type: UserActionTypes.USER_EMAIL_CHECK_ERROR, payload: res})
                        })
            } catch(e: any) {
                dispatch({type: UserActionTypes.USER_EMAIL_CHECK_ERROR, payload: e})
            }
        }

        if(type === 'nickname') {
            try {
                dispatch({type: UserActionTypes.USER_NICKNAME_CHECK_LOADING})
                    await axios(REGDATA_CHECK_API_ROUTE, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: {nickname: value}
                    })
                        .then(() => {
                            dispatch({type: UserActionTypes.USER_NICKNAME_CHECK_SUCCESS})
                        })
                        .catch((res: any) => {
                            dispatch({type: UserActionTypes.USER_NICKNAME_CHECK_ERROR, payload: res})
                        })
            } catch(e: any) {
                dispatch({type: UserActionTypes.USER_NICKNAME_CHECK_ERROR, payload: e})
            }
        }
        
    }
}

export const resetAuthState = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.RESET_AUTH_STATE})
    }
}