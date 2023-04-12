import React from "react";
import './css/TodoItem.css';
import {ReactComponent as CheckmarkActive} from './img/check-active.svg';
import {ReactComponent as CheckmarkInactive} from './img/check-inactive.svg';

function TodoItem(props) {
    
    

    return (
        <div className="todo--item-card">
            <li>
                <span 
                    className="checkmark"
                    onClick={props.onComplete}
                >
                    {props.completed ? (
                            <CheckmarkActive className="icon-check--active" />
                        ) : (
                            <CheckmarkInactive className="icon-check--inactive" />
                        )}
                
                </span>
                <p className={`${props.completed && 'todo-item--complete'}`}>{props.text}</p>
                <span 
                    className="x-icon"
                    onClick={props.onDelete}
                />
            </li>
        </div>
    );
}

export { TodoItem };