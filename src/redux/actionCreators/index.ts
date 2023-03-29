import axios from 'axios';
import { Dispatch } from 'redux';
import {Action, ActionType} from "../actionTypes/todoActionTypes";

export const getTodos = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.GET_TODO_PENDING
        });

        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos`);

            dispatch({
                type: ActionType.GET_TODO_SUCCESS,
                payload: data
            });

        } catch(err:any) {
            dispatch({
                type: ActionType.GET_TODO_FAIL,
                payload: err.message
            });
        }
    }
}