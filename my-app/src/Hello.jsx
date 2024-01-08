import { Link } from "react-router-dom";

export function Hello(){
    return(
          <div>
            <h2> Hello World!</h2>
        <Link to="/link1">Change a link</Link>
        <Link to="/link2">Change a link</Link>
        <Link to="/link3">Change a link</Link>
    </div> 
    )
}
    
  