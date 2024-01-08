import { Route, Routes } from "react-router-dom";
import {Counter} from "./Counter"; 
import { Hello } from "./Hello";

export function App() {
  return (
    <div>
        <Routes>
        <Route path="/"element={<Hello/>}/>
        <Route path="/counter" element={<Counter />} />
    </Routes>
     
    </div>
    
    // ---->   /counter nella barra degli indirizzi per vedere il render 

  );
}