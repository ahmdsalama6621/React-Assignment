import React from "react"
import "./Nav.css"
import { Link, NavLink } from "react-router-dom"
function Navbar() {

  return (
    <div className="nav">
      <h2><Link to="/">START FRAMEWORK</Link></h2>
      <ul>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/potofolio">Potofolio</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  )
}
export default Navbar;