import React from "react"
import Root from "./Root"
import {createRoot} from "react-dom/client"
const rootElement= document.getElementById("root")
const root= createRoot(rootElement)
root.render(<Root/>)
