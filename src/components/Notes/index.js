import {v4 as uuidv4} from "uuid"
import NoteItem from "../NoteItem"
import { useState } from "react"
import "./index.css"

const Notes=()=>{
    const[title,setTitle]=useState("")
    const[text,setText]=useState("")
    const[noteslist,setNotesList]=useState([])

    const onChangeTitle=(event)=>(
        setTitle(event.target.value)
    )

    const onChangeText=(event)=>(
        setText(event.target.value)
    )

    const onClickBtn=()=>{
        const newNote={
            id:uuidv4(),
            title,
            text
        }
        setNotesList(prevNotesList=>[...prevNotesList,newNote])
        setTitle("")
        setText("")
    }
    
    return(
        <div className="main-container">
            <h1 className="heading">Notes</h1>
            <div className="notes-container">
                <input type="text" placeholder="Title" className="input" onChange={onChangeTitle} value={title}/>
                <input type="text" placeholder="Take a Note..." className="input" onChange={onChangeText} value={text}/>
                <button className="btn" onClick={onClickBtn}>Add</button>
            </div>
            {noteslist.length === 0 ? (
                <div className="empty-item-container">
                    <img src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png" alt="notes empty" className="empty-img"/>
                    <h1 className="items-heading">No Notes Yet</h1>
                    <p className="items-description">Notes you add will appear here</p>
                </div>):(
                <ul className="items-container">
                    {noteslist.map(eachNote=>(
                        <NoteItem key={eachNote.id} noteDetails={eachNote}/>
                    ))}
                </ul>)
            }
        </div>
    )
}

export default Notes