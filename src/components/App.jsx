import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setnNotes] = useState([]);

    function addNote(notes){
        setnNotes((prevNotes)=>{
            return [...prevNotes, notes];
        })
    }
    return <div>
        <Header />
        <CreateArea addNote={addNote} />
        {notes.map((note, index)=>{
            return <Note key={index} id={index} title={note.title} content={note.content} />   
        })}
        <Footer />
    </div>
}

export default App;