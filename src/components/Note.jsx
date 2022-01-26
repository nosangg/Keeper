import React from "react";

// render notes using maps

function Note(porps){
    return(
        <div className="note">
            <h1>
                {porps.title}
            </h1>
            <p>
               {porps.content} 
            </p>
        </div>
    )
    
}

export default Note;