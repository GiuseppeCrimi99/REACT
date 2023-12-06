// import { Hello } from "./Hello";

import { Welcome } from "./Welcome";

export function App (){
    return <Welcome name="Luigi"/>        

    // What happens if no name prop is passed to the Welcome component? Can you set a default value for the name prop?
    // Non stamperà nulla nel nostro HTML, ma se avessimo impostato un valore predefinito ad esempio "Guest" stampera Guest come output
    
}