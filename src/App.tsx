import React, {useEffect} from 'react';
import './App.css';
import {getTodos} from "./redux/actionCreators";
import {useTypedSelector} from './redux/hooks';
import {useDispatch} from 'react-redux';
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;

const App = () => {

    const dispatch = useDispatch();
    const {todos, loading, error} = useTypedSelector((state) => state.todos);

    console.log({todos, loading, error})
    useEffect(() => {
        // @ts-ignore
        dispatch(getTodos());
    }, [])


    return (
        <div>
            {loading && <h1>...loading</h1>}
            {error && <h1>{error}</h1>}
            {todos && todos.map((todo) => <h1>{todo.title}</h1>)}
        </div>
    );
}

export default App;
