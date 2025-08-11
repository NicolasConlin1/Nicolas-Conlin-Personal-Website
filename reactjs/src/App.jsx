import {React, useEffect} from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import { Route, Routes, useLocation} from "react-router-dom"

function App() {

    //This allows the page to scroll to a specific section ID
    const location = useLocation()

    useEffect(() => {
        //Checks if location.hash has anything, then makes sure it's a valid element ID before attempting to scroll
        //Page either errors out or shows nothing otherwise.
        if (location.hash != "") {
            if (document.getElementById(location.hash.substring(1)) != null) {
                document.getElementById(location.hash.substring(1)).scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
        }
        else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth',});
        }
    }, [location]);

    return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Resume' element={<Resume />} />
            <Route path='/Projects' element={<Projects />} />
        </Routes>
    </>
  )
}

export default App
