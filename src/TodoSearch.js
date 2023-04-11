import React from "react";
import './css/TodoSearch.css';

function TodoSearch(){
    return(
        
        <div className="search-box">
            <input className="search-input" placeholder="Búsqueda" />
            <div className="search-icon"></div>
        </div>
            
    );
}

export{TodoSearch};