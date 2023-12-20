import { useContext, useEffect , useState } from "react";   
import LanguageContext from "./LanguageContext";

export function Clock(){
     const language= useContext(LanguageContext)
    const[date, setDate]= useState(new Date())

    useEffect(()=>{

        console.log("update time");
        const id= setInterval(() => {
            setDate(new Date())
        }, 1000);
        return(()=>{
            clearInterval(id)
        })


    },[])


    return(
        <div>
        <p>{language === "en" ? "the current time is" : "l'ora corrente è:"} {date.toLocaleTimeString()}</p>
        

        </div>
    )



}