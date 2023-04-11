import React from "react";
import { TodoItem } from "./TodoItem";
import './css/TodoList.css';

function TodoList(props){
    return(
        <section className="todo-container">
            <ul>
                {props.children}
            </ul>
        </section>
    )
};

export {TodoList};