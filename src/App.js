
import React from "react";
//import NombreEquivocado from './TodoCounter';
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import {TodoList} from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";

import './css/App.css';

const defautlTodos = [
  {text: 'Dar de comer al gato', completed:true},
  {text: 'Medicina de la gatósfera', completed:false},
  {text: 'Comprar hamburguesa', completed:false},
];

function App(props) {
  const[todos, setTodos] = React.useState(defautlTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })    
  }

  return (
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
          />
        ))}
     <CreateTodoButton /> 
     </TodoList>
    
     
     </div>
  );
}

export default App;
