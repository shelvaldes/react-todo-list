import React from "react";
import './css/TodoCounter.css';


function TodoCounter({ total, completed }){

    return (
        <div  className="TodoCounter">
            <h2>Completaste</h2>
            <p>{completed} de {total} tareas</p>
        </div>
    );
}

//export default TodoCounter;
export {TodoCounter};