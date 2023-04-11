import React from "react";
import './css/TodoSearch.css';

function TodoSearch(){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return(
        
        
        <div className="search-box">
            <input 
                className="search-input"
                placeholder="Búsqueda" 
                onChange={onSearchValueChange}
            />
            <div className="search-icon"></div>
        </div>
            
    );
}

export{TodoSearch};