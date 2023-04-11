import React from "react";
import './css/TodoCounter.css';


function TodoCounter(){
    return (
        <div  className="TodoCounter">
            <h2>Completaste</h2>
            <p>2 de 3 tareas</p>
        </div>
    );
}

//export default TodoCounter;
export {TodoCounter};