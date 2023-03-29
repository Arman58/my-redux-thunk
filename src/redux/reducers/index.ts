import {Action,ActionType} from "../actionTypes/todoActionTypes";
import {State} from "../../types";

const initialState = {
    todos: [],
    loading: false,
    error: null
}


export const todoReducer = (state: State = initialState, action:Action):State => {
    switch (action.type) {
        case ActionType.GET_TODO_PENDING:
            return {
                ...state,
                loading: true
            }
        case ActionType.GET_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case ActionType.GET_TODO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}