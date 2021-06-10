import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const Notes = (props) => {
    const deleteEvent = () =>{
        props.deleteNote(props.id)
    }
    return (
        
        <div className="card col-md-3 p-3 m-1">
            <h5>{props.title}</h5>
            <br/>
            <p>{props.content}</p>
            <span onClick={deleteEvent} className="d-flex flex-row-reverse"><IconButton><DeleteIcon /></IconButton></span>
        </div>
    )
}

export default Notes
