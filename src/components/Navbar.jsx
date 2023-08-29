import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <Link to="./Home">Home</Link>
        <Link to="./Contacto">Contacto</Link>
        <Link to="./Beer">Beer</Link>
    </nav>
  )
}

export default Navbar