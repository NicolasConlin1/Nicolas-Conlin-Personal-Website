//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//Used for webpage navigation without reloading the app every time
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <BrowserRouter basename={'/Nicolas-Conlin-Personal-Website/'}>
        <App />
    </BrowserRouter>
  //{/*</StrictMode>,*/}
)
