import React, { useState } from "react";
import { Welcome } from "./Welcome";

// Funzione per creare i dati iniziali
function createData() {
  return {
    name: "",
  };
}

export function InteractiveWelcome() {
  const [data, setData] = useState(createData());

  // Gestore dell'evento di input per aggiornare lo stato ---->!!!!!!IMPORTANTISSIMO!!!!!<----
  function handleInputEvent(event) {
    const name= event.target.name;
    const value=event.target.value;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  return (
    <div>
      <input name="name"value={data.name}onChange={handleInputEvent}/>

      {<Welcome name={data.name}/> }  
    </div>
  );
}