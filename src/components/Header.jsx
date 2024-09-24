import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import '../Styles/HeaderStyles.css'
const Header = () => {
  return (
    <nav className='navbar'>
    <div className="logo">
        <NavLink to={"/"}><img src={logo} alt="logo" /></NavLink>
    </div>
    <div className='navlist'>
    <ul>
        <li>
            <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
            <NavLink to={"/service"}>SERVICES</NavLink>
        </li>
        <li>
            <NavLink to={"/about"}>ABOUT</NavLink>
        </li>
        <li>
            <NavLink to={"/contact"}>CONTACT</NavLink>
        </li>
    </ul>
    </div>
    </nav>
  )
}

export default Header