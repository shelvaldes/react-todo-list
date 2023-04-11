
import React from "react";
//import NombreEquivocado from './TodoCounter';
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import {TodoList} from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

import './css/App.css';

const todos = [
  {text: 'Dar de comer al gato', completed:true},
  {text: 'Medicina de la gatósfera', completed:false},
  {text: 'Comprar hamburguesa', completed:false},
];

function App(props) {
  return (
    <div className="container">
     <TodoCounter />
     
     <TodoSearch />
     
     <TodoList>
      
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
     <CreateTodoButton /> 
     </TodoList>
    
     
     </div>
  );
}

export default App;
