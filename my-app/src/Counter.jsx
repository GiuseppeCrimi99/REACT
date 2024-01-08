import { useState } from "react";
import { Button } from "./Button";

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
            <h2>the counter: {counter}</h2>
            <Button onClick={Increment}label="Increment"/>
            <Button onClick={Decrement}label="Decrement"/>
            <Button onClick={Reset}label="Reset"/>

        </div>
    )
}

// Quando si chiama la funzione "setter" per incrementare il contatore, il parametro deve essere una funzione o un valore immediato? Perché?
// il parametro deve essere una funzione perchè è di valore asincrona 