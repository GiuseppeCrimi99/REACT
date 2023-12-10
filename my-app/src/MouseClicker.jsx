import React from "react";

export function MouseClicker(){

    function Click(event){
        console.log(event.currentTarget.name);
    }

    function ClickImage(event) {
        console.log(event.currentTarget.src);
        event.stopPropagation(); // Impedisce la propagazione dell'evento al pulsante   
    }
    return(
        
        <button name="one" onClick={Click}>
        <img src="ef.com" alt="" width={30} height={50} onClick={ClickImage} />
        Cliccami!
    </button>
        
    )
}