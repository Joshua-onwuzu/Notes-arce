import React, { useState } from "react";

const NoteStructure =(props)=>{
    const [isClicked, setIsClicked] = useState('false')
    const clicked = () =>{
        props.isClicked(props.id);
    }
    const editClick = ()=>{
        setIsClicked('true');
    }
    return (
        <div 
        id = 'saveEdit'
        className="note" 
        contentEditable ={isClicked}
        suppressContentEditableWarning={true}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick = {clicked}>
                <i onClick = {clicked} className="fas fa-trash"></i>
            </button>
            <button onClick = {editClick}>
                edit
            </button>
        </div>
    )
}


export default NoteStructure;