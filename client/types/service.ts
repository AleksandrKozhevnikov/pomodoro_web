export interface ServiceState {
    modal: boolean
    settingsModal: boolean
    statisticModal: boolean
}

export enum ServiceActionTypes {
    CLOSE_MODAL = 'CLOSE_MODAL',
    OPEN_MODAL = 'OPEN_MODAL',
    OPEN_SETTINGS = 'OPEN_SETTINGS',
    CLOSE_SETTINGS = 'CLOSE_SETTINGS',
    OPEN_STATISTIC = 'OPEN_STATISTIC',
    CLOSE_STATISTIC = 'CLOSE_STATISTIC',
}


interface ServiceCloseModalAction {
    type: ServiceActionTypes.CLOSE_MODAL
}

interface ServiceOpenModalAction {
    type: ServiceActionTypes.OPEN_MODAL
}

interface ServiceOpenSettingsAction {
    type: ServiceActionTypes.OPEN_SETTINGS
}

interface ServiceCloseSettingsAction {
    type: ServiceActionTypes.CLOSE_SETTINGS
}

interface ServiceOpenStatisticAction {
    type: ServiceActionTypes.OPEN_STATISTIC
}

interface ServiceCloseStatisticAction {
    type: ServiceActionTypes.CLOSE_STATISTIC
}
export type ServiceAction = 
            ServiceCloseModalAction | 
            ServiceOpenModalAction |
            ServiceOpenSettingsAction |
            ServiceCloseSettingsAction |
            ServiceOpenStatisticAction |
            ServiceCloseStatisticAction