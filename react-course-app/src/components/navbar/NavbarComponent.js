import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './NavbarComponent.css';

const NavbarComponent = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("render");
    }, [counter])
    

    

    const hideMenu = () =>{
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "-200px";
    }

    const showMenu = () =>{
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "0"; // po defaultu u css-u za male ekrane je stavljeno da je -200, ukoliko stisne dugme, postaje right: 0, pa se pojavi  meni
    }

  return (
    <nav className='navbar'>
        <Link to='/home' className='nav-logo' >
            <img className='img-logo' src={require('../../images/logo.png')} alt=''></img>
        </Link>
        <div className='nav-links' id='navLinks'>
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul className='nav-ul'>
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
        <i id="menu" className="fa fa-bars" onClick={showMenu}></i>
    </nav>
  )
}

export default NavbarComponent