import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
const [toggleMenu, setToggleMenu] = useState(false);
const [largeur, setLargeur] = useState(window.innerWidth);

const toggleNav = () => {
  setToggleMenu(!toggleMenu)
}

useEffect(()=> {

  const changeWidth = () => {
    setLargeur(window.innerWidth);
  }
window.addEventListener("resize", changeWidth);


  return () => {
    window.removeEventListener("resize", changeWidth);
  }
}, [])



  return (
    <nav>
      {(toggleMenu ||largeur > 500) && (

        <ul className="liste">
  <li className="items"><Link to="/">Accueil</Link></li>
  <li className="items"><Link to="/profile">Profile</Link></li>
  <li className="items"><Link to="/register">Register</Link></li>
  <li className="items"><Link to="/login">Login</Link></li>
   
 </ul>
   )}
 <button onClick={toggleNav} className="btn">☰</button>
 </nav>
 
  )
}

export default Navbar;