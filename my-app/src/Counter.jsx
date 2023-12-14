import { useEffect, useRef, useState } from "react";



    export function Counter({initialValue= 0 }){
    const[counter, setCounter]= useState(initialValue)

    const upDown= useRef("none")
    useEffect(()=>{
        if(counter>initialValue){
          
            if(upDown.current!=="up"){
                console.log("up");
            }
             upDown.current="up"
        }else if(counter<initialValue){
           
            if(upDown.current!=="down"){
                 console.log("down");
            }
             upDown.current="down"

        }else{
            upDown.current="none"
            console.log("none");

        }


    },[counter,initialValue])

    function Increment(){
        setCounter(counter+1)
    }
    function Decrement(){
        setCounter(counter-1)
    }
    function Reset(){
        setCounter(initialValue)
    }
    return (
        <div>
            <h2>the counter: {counter}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>

        </div>
    )
}