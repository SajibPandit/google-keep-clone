import React,{useState} from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

const CreateNote = (props) => {
    const [expand,setExpand] = useState(false)
    const [note,setNote] = useState({
        title: '',
        content : ''
    })

    const InputEvent = (event) =>{
        //const value = event.target.value
        //const name = event.target.name
        const {name,value} = event.target
        setNote((perv)=>{
            return{
                ...perv,
                [name]: value
            }

        })
    }

    const AddEvent = () =>{
        props.passNote(note)
        setNote(()=>{
            return{
                title: '',
                content : ''
            }
        })
    }

    const expandIt = () =>{
        setExpand(true)
    }

    const collapseIt = () =>{
        setExpand(!expand)
    }

    return (
        <div onDoubleClick={collapseIt} className="card w-50 mx-auto px-3 py-2 my-3">
            <form action="" className="">
                {expand ? (<input required id="title" name="title" value={note.title} onChange={InputEvent} class="form-control my-3 border-none" type="text" placeholder="Enter title"/>):null}
                <textarea name="content" value={note.content} onClick={expandIt} onChange={InputEvent} placeholder="Write a note..." className="form-control my-3" cols="20" rows="5" required/>
                {expand ? <span  className="d-flex flex-row-reverse text-progress"><IconButton><AddCircleIcon onClick={AddEvent}/></IconButton></span>:null}
            </form>
        </div>
    )
}

export default CreateNote
