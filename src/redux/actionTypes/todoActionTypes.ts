import {Todo} from "../../types";

export enum ActionType {
    GET_TODO_PENDING = 'GET_TODO_PENDING',
    GET_TODO_SUCCESS = 'GET_TODO_SUCCESS',
    GET_TODO_FAIL = 'GET_TODO_FAIL'
}

interface actionPending {
    type: ActionType.GET_TODO_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_TODO_SUCCESS;
    payload: Todo[];
}

interface actionFail {
    type: ActionType.GET_TODO_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
