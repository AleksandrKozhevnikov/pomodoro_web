import {ServiceActionTypes, ServiceState, ServiceAction} from '../../types/service'

const initialState = {
    modal: false
}


export const serviceReducer = (state = initialState, action: ServiceAction): ServiceState => {
    switch(action.type) {
        case ServiceActionTypes.CLOSE_MODAL:
            return {...state, modal: false}
        case ServiceActionTypes.OPEN_MODAL:
            return {...state, modal: true}
        default: return state
    }
}