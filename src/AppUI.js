import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import {TodoList} from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

import './css/App.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }){
    return(
        <div className="container">
     <TodoCounter 
      total={totalTodos}
      completed = {completedTodos}
     />
     
     <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
     />
     
     <TodoList>
      
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete= {()=> completeTodo(todo.text)}
            onDelete= {()=> deleteTodo(todo.text)}
          />
        ))}
     <CreateTodoButton /> 
     </TodoList>
    
     
     </div>
    );
}

export { AppUI };