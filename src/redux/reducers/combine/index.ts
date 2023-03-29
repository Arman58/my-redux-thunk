import {combineReducers} from 'redux';
import {todoReducer} from "../index";

const reducers = combineReducers({
    todos: todoReducer
});

export default reducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;