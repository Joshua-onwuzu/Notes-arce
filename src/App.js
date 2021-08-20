import React, {useState, useEffect } from 'react';
import Header from "./Components/Header";
import NotesStructure from "./Components/NoteStructure";
import InputFunction from "./Components/InputFunction";


const App = ()=> {
  const [list, setList] = useState([]);
  useEffect (()=>{
    fetch('/getpoint')
    .then(res => {
      if(res.status ===200){
        return res.json();
      }throw res
    })
    .then(data => setList(data))
    .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
      const addToNote =  async (noteObject)=>{
        await fetch('/getpoint', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(noteObject),
        });
        window.location.reload(true);
      };
      const handleDelete = async (id)=>{
         await fetch('/delete/'+id, {
          method: 'DELETE'
        });
        window.location.reload(true);
      };

      const notesFunction = (noteItem)=>{
          return (
              <NotesStructure 
              isClicked = {handleDelete} 
              key = {noteItem._id}
              id = {noteItem._id} 
              title = {noteItem.title} 
              content ={noteItem.content} />
          )
        };
        let isListEmpty = false
        if (list.length === 0){
          isListEmpty = true;
        }
        const emptyText = ()=>{
          return(
            <div className ="emptytext">
              <h1>Notes you add will appear here</h1>
            </div>
          )
        }
        return (
          <div>
            <Header />
            <InputFunction change = {addToNote} />
            {isListEmpty === true ? emptyText() : null}
            {list.map(notesFunction)}
          </div>
        );
      }
export default App;