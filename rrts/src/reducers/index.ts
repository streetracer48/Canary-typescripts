import {combineReducers} from 'redux'
import { TodoReducer } from './todos'

import { Todo } from '../Actions'


export interface StoreState{
  todos:Todo[]
}

export const reducers = combineReducers <StoreState>({
  todos:TodoReducer
});