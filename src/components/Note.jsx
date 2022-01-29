import React from "react";

// render notes using maps

function Note(props){

    return(
        <div className="note">
            <h1>
                {props.title}
            </h1>
            <p>
               {props.content} 
            </p>
            <button onClick={()=>{props.deleteItem(props.id)}}>DELETE</button>
        </div>
    )
    
}

export default Note;