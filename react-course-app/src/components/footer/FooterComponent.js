import React from 'react'
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <div className='footer-main-container'>
        <h3 className='h3-footer'>About us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='icons'>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
        </div>
    </div>
    
  )
}

export default FooterComponent