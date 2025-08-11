import React from 'react'
import './Navbar.css'
import logo from '../../assets/MyEye.jpg'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='container'>
            <Link to='/'>
                <img src={logo} alt='Site Logo' title='Site Logo' className='logo'></img>
            </Link>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar