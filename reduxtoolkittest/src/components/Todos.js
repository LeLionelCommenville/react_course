import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import {useDispatch} from 'react-redux'


function Todos() {
    
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch() 
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    {todo.text}
                    <button
                    onClick={() => dispatch(removeTodo(todo.id))}> Delete todo</button>
                </div>
            ))}
        </> 
    )
}

export default Todos
