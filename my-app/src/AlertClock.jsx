import { Button } from "./Button";

export function AlertClock(){
    function handleShowTime(){
        const date= new Date;
        return alert (`The local time is ${date.toLocaleTimeString()}`)
    }
    return (
        <div>
            <Button onClick={handleShowTime}label="Click Me!"/>
        </div>
    )
}