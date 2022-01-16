import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
       <nav>

<div>
    <Link to="/">Home</Link>
</div>
<div>
    <Link to="/wandlist">Wand List</Link>
</div>
<div>
    <Link to="/about">About</Link>
</div>


       </nav>
    )
}

export default NavBar
