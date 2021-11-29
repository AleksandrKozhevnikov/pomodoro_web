export interface ServiceState {
    modal: boolean
}

export enum ServiceActionTypes {
    CLOSE_MODAL = 'CLOSE_MODAL',
    OPEN_MODAL = 'OPEN_MODAL'
}


interface ServiceCloseModalAction {
    type: ServiceActionTypes.CLOSE_MODAL
}

interface ServiceOpenModalAction {
    type: ServiceActionTypes.OPEN_MODAL
}


export type ServiceAction = ServiceCloseModalAction | ServiceOpenModalAction