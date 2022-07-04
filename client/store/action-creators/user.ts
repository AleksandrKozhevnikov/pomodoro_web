import {UserAction, UserActionTypes, UserLogDto, UserRegDto} from '../../types/user'
import axios from 'axios'
import {Dispatch} from 'redux'
import {CHANGE_USER_VISIBILITY_API_ROUTE, LOGIN_API_ROUTE, REGDATA_CHECK_API_ROUTE, REGISTRATION_API_ROUTE, USER_BY_ID_API_ROUTE} from '../../utils/apiRoutes'
import { createCookie, removeCookie, getCookie } from '../../utils/cookies'

const token = getCookie('token')

export const userRegistration = (userData: UserRegDto) => {
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

export const userLogin = (userData: UserLogDto) => {
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
                        dispatch({type: UserActionTypes.USER_LOGIN_SUCCESS})
                        console.log(res.data.token)
                        createCookie('token', res.data.token)
                    })
                    .catch((res: string) => {
                        dispatch({type: UserActionTypes.USER_LOGIN_ERROR, payload: res})
                    })
        } catch(e: any) {
            dispatch({type: UserActionTypes.USER_LOGIN_ERROR, payload: e})
        }
    }
}


export const userDataSet = (type: string, value: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.USER_SET_IS_LOGIN})
        if(type === 'email') {
            dispatch({type: UserActionTypes.USER_SET_EMAIL, payload: value})
        }

        if(type === 'nickname') {
            dispatch({type: UserActionTypes.USER_SET_NICKNAME, payload: value})
        }
    }
}

export const userLogout = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.USER_SET_IS_LOGOUT})
        removeCookie('token')
    }
}


export const changeUserVisibility = (id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await axios.get(CHANGE_USER_VISIBILITY_API_ROUTE(id), {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        } catch(e: any) {
            console.log(e)
        }
    }
}

export const getUserData = (id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
                await axios.get(USER_BY_ID_API_ROUTE(id), {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then((res: any) => {
                        dispatch({type: UserActionTypes.USER_SET_DATA, payload: res.data})
                    })
        } catch(e: any) {
            console.log(e)
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