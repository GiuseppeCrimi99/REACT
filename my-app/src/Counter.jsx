import { useState } from "react";
import { Button } from "./Button";
import { CounterDisplay } from "./CounterDisplay";


export function Counter({initialValue= 0 }){


    const[counter, setCounter]= useState(initialValue)

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
             <CounterDisplay count={counter} />
            <Button onClick={Increment}label="Increment"/>
            <Button onClick={Decrement}label="Decrement"/>
            <Button onClick={Reset}label="Reset"/>

        </div>
    )
}
