import { Hello } from "./Hello"
import { App } from "./App"
import { Message } from "./Message"
import {createRoot} from "react-dom/client"
const rootElement= document.getElementById("root")
const root= createRoot(rootElement)
root.render(<App/>)