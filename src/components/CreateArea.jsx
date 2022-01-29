import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    // const [notes, updateNotes] = useState([]);

    function handleChange(event){
        const {name, value} = event.target;
            setNote((prevValue)=>{
                return{
                    ...prevValue,
                    [name]: value
                }
            })
    }

    // function addNote(event){
    //     event.preventDefault();
    //     updateNotes((prevValue)=>{
    //       return [note, ...prevValue]
    //   })
    //   console.log("clicked")
    //   console.log(notes)
    // }

    function submitForm(event){
        event.preventDefault();
        {props.addNote(note)};
        setNote({
          title:"",
          content:""
        });
        
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." value={note.content} rows="3" />
        <button onClick={submitForm}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
