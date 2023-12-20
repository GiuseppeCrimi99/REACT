import { useState } from "react"

const Container=({title,children})=>{


    const[collapse,setCollapse]=useState(false)
     
    const handleToggleCollapse=()=>{
        setCollapse((c)=>!c)
    }


    return(
        <div className="app">
            <div className="app-title">{title}
            <button onClick={handleToggleCollapse}>Show/Hidden</button>
            </div>
            {collapse&&<div className="app-content">{children}</div>}
        </div>
    )
}

export default Container