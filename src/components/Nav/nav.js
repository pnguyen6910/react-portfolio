import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Nav = () => {
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <Link to="/" class="nav-link active" href="#">Home</Link>
        </li>
        <li class="nav-item">
            <Link to="/portfolio" class="nav-link" href="#">Portfolio</Link>
        </li>
        <li class="nav-item">
            <Link to="/contact" class="nav-link" href="#">Contact</Link>
        </li>
        <li class="nav-item">
            <Link to="/about" class="nav-link" href="#">About</Link>
        </li>
    </ul>
}

export default Nav;