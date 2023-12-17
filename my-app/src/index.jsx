
import { App } from "./App"
import {createRoot} from "react-dom/client"
const rootElement= document.getElementById("root")
const root= createRoot(rootElement)
import "./index.css"
root.render(<App/>)
