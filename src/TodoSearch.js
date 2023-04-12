import React from "react";
import './css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        
        
        <div className="search-box">
            <input
                className="search-input"
                placeholder="Búsqueda"
                value={searchValue}
                onChange={onSearchValueChange} />
                <div className="search-icon"></div>
                
        </div>
            
    );
}

export{TodoSearch};