import {combineReducers} from "redux";
import {serviceReducer} from './serviceReducer'
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    service: serviceReducer,
    user: userReducer
})


export type RootState = ReturnType<typeof rootReducer>