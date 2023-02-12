import React from 'react'
import './HeaderStyle.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
    <Link to='/'>Home</Link>
    <Link to='/simpsons'>Simpsons</Link>
    <Link to='/formulary'>Formulary</Link>
    </div>
  )
}

export default Header