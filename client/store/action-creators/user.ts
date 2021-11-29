import {UserAction, UserActionTypes, userRegDto} from '../../types/user'
import axios from 'axios'
import {Dispatch} from 'redux'
import {REGISTRATION_API_ROUTE} from '../../utils/apiRoutes'



export const userRegistration = (user: userRegDto) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.USER_REGISTRATION_LOADING})
        try {
            dispatch({type: UserActionTypes.USER_REGISTRATION})
                await axios(`${REGISTRATION_API_ROUTE}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: user
                })
                    .then(() => {
                        dispatch({type: UserActionTypes.USER_REGISTRATION_SUCCESS})
                        
                    })
                    .catch((res: string) => {
                        dispatch({type: UserActionTypes.USER_REGISTRATION_ERROR, payload: res})
                    })
        } catch(e) {
            dispatch({type: UserActionTypes.USER_REGISTRATION_ERROR, payload: e})
        }
    }
}