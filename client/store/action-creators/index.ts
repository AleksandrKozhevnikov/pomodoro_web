/* eslint-disable import/no-anonymous-default-export */
import * as ServiceActionCreators from './service'
import * as UserActionCreators from './user'

export default {
    ...ServiceActionCreators,
    ...UserActionCreators
}