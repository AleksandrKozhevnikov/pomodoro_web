import {ServiceActionTypes, ServiceState, ServiceAction} from '../../types/service'

const initialState = {
    modal: false,
    settingsModal: false,
    statisticModal: false
}


export const serviceReducer = (state = initialState, action: ServiceAction): ServiceState => {
    switch(action.type) {
        case ServiceActionTypes.CLOSE_MODAL:
            return {...state, modal: false}
        case ServiceActionTypes.OPEN_MODAL:
            return {...state, modal: true}
        
        case ServiceActionTypes.OPEN_SETTINGS:
            return {...state, settingsModal: true}
        case ServiceActionTypes.CLOSE_SETTINGS:
            return {...state, settingsModal: false}
        case ServiceActionTypes.OPEN_STATISTIC:
            return {...state, statisticModal: true}
        case ServiceActionTypes.CLOSE_STATISTIC:
            return {...state, statisticModal: false}
        default: return state
    }
}