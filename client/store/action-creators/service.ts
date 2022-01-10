import {ServiceActionTypes, ServiceAction} from '../../types/service'
import {Dispatch} from 'redux'


export const closeModal = () => {
    return (dispatch: Dispatch<ServiceAction>) => {
        dispatch({type: ServiceActionTypes.CLOSE_MODAL})
    }
}

export const openModal = () => {
    return (dispatch: Dispatch<ServiceAction>) => {
        dispatch({type: ServiceActionTypes.OPEN_MODAL})
    }
}







