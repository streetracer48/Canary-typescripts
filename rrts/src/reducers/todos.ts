import { Todo, fetchTodos, fetchTodosAction } from '../Actions'
import { ActionTypes } from '../Actions/types'


export const TodoReducer = (
     state:Todo[] = [],
     action:fetchTodosAction
) => {
    switch(action.type){
        case ActionTypes.fetchTodos:
        return action.payload

        default:

        return state
    }
}