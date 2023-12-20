import Container from "./Container";
import { Hello } from "./Hello";


export function App (){
    return(
        <Container title={<h2>Title of Container</h2>}>
        
                <Hello/>
            
           </Container>
    )
}