import React from 'react'
import { Link } from 'react-router-dom'
import "./nav.css"

const Nav = () => {
  return (
    <div id='nav-Flex'>
        <div className='nav-box'><Link to="/">Home</Link></div>
        <div className='nav-box'><Link to="about">About</Link></div>
        <div className='nav-box'><Link to="contact">Contact</Link></div>
    </div>
  )
}

export default Nav