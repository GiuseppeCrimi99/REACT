export function MouseClicker(){

    function Click(event){
        console.log(event.target.name);
    }

    return(
        <>
            <button name="one"onClick={Click}>Cliccami!</button>
        
        </>
    )
}