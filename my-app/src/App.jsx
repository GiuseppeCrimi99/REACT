import { useState } from "react";
import { Clock } from "./Clock"
import LanguageContext from "./LanguageContext"

export function App (){
    const[language,setLanguage]=useState("en")
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
      };



    return(
        <div>
               <label></label>
               <select name="lanSelect" value={language} onChange={handleChangeLanguage}>
                <option value="en">English</option>
                <option value="it">Italiano</option>
               </select>
              <LanguageContext.Provider value={language}>

                <Clock/>
              </LanguageContext.Provider>
           
           
        </div>
    )
}