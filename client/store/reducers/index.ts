import {combineReducers} from 'redux';
import { TestReducer } from './testReducer';

export const rootReducer = combineReducers({
    test: TestReducer
})

export type RootState = ReturnType<typeof rootReducer>