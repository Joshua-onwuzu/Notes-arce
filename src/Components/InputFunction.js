import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


const InputFunction = (props) => {
    const [isExpanded, setExpanded] = useState(false);
    const [newNotes, setNewNotes] = useState({
        title : "",
        content : ""
    })
const handleChange = (event)=>{
    const {name,value} = event.target;
    setNewNotes (prevNotes =>{
       return {
        ...prevNotes,
        [name] : value
       }
    });
}
function expand() {
    setExpanded(true);
  }
const handleClick = (event)=>{
    event.preventDefault();
    const callMethod = props.change;
    callMethod(newNotes);
    setNewNotes({
        title : "",
        content : ""
    })

}
    return (
        <div>
            <form className="create-note">
            {isExpanded && (
                <input
                name="title"
                type='text'
                onChange={handleChange}
                value={newNotes.title}
                placeholder="Title"
                />
            )}
    
            <textarea
                name="content"
                onClick={expand}
                onChange={handleChange}
                value={newNotes.content}
                placeholder="Take note..."
                rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={handleClick}>
                <AddIcon />
                </Fab>
            </Zoom>
        </form>
       </div> 
    )

}


export default InputFunction