import { Hello } from "./Hello";
import { Message } from "./Message";


// È possibile utilizzare il Hello componente più di una volta nel Appcomponente? Cosa succede se lo fai?
// Si è possibile, chiameremo la nostra funnzione due volte all'interno del nostro html, e vedremo stampato  due volte "Hello Wolrd"


// Puoi eseguire il rendering del Messagecomponente direttamente all'interno del Appcomponente? Cosa succede se lo fai?
// Non capisco come devo fare il secondo punto! 


   

export function App (){
    return(

        <div>
                 <Hello />
                 <Message/>
                 <Hello/>  

            
           
        </div>
    )
}