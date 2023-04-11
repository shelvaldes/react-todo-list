import React from "react";
import './css/AddButton.css';

function CreateTodoButton(props){

    const onClickButton =(msg) => {
        alert(msg);
    };

    return (
        <button 
            className="add-button"
            onClick={()=> onClickButton('modal de miau')}
        >
            +
        </button>
    )
}

export {CreateTodoButton};