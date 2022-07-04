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

export const openSettings = () => {
    return (dispatch: Dispatch<ServiceAction>) => {
        dispatch({type: ServiceActionTypes.OPEN_SETTINGS})
    }
}

export const closeSettings = () => {
    return (dispatch: Dispatch<ServiceAction>) => {
        dispatch({type: ServiceActionTypes.CLOSE_SETTINGS})
    }
}

export const openStatistic = () => {
    return (dispatch: Dispatch<ServiceAction>) => {
        dispatch({type: ServiceActionTypes.OPEN_STATISTIC})
    }
}

export const closeStatistic = () => {
    return (dispatch: Dispatch<ServiceAction>) => {
        dispatch({type: ServiceActionTypes.CLOSE_STATISTIC})
    }
}









