import "./index.css"

const NoteItem=(props)=>{
    const{noteDetails}=props
    const{title,text}=noteDetails
    return(
        <div className="item-container">
            <li className="list-items-container">
                <div className="item-details-container">
                    <h1 className="items-heading">{title}</h1>
                    <p className="items-description">{text}</p>
                </div>
            </li>  
        </div>
    )
}

export default NoteItem