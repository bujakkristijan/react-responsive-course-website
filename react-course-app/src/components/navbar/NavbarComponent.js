import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <nav className='navbar'>
        <Link to='/home' className='nav-logo' >
            <img className='img-logo' src={require('../../images/logo.png')} alt=''></img>
        </Link>
        <div className='nav-links'>
            <ul>
                <li className='nav-list-item'>
                    <Link className='nav-link'>Home</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-link'>About</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-link'>Course</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-link'>Blog</Link>
                </li>
                <li className='nav-list-item'>
                    <Link className='nav-link'>Contact</Link>
                </li>
                
            </ul>
        </div>

    </nav>
  )
}

export default NavbarComponent