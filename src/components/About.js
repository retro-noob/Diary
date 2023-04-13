 import React from 'react'
import { useContext,useEffect } from 'react'
 import noteContext from '../context/notes/noteContext'




export const About=()=> {
  const context= useContext(noteContext);
  const {notes,setNotes}=context;
  return (
 <div className='container'>
  <h2>Your Notes</h2>
  {notes.map((note)=>{
    return note.title;
  })}
 </div>
  );
}
export default About