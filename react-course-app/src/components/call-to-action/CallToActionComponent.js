import React from 'react'
import { Link } from 'react-router-dom'
import FooterComponent from '../footer/FooterComponent'
import './CallToActionComponent.css'

const CallToActionComponent = () => {
  return (
    <>
    <div className='cta-main-container'>
        <h1 className='h1-cta'>Enroll For Our Various Online Courses <br/> Anywhere From The World</h1>
        <Link to='/' className='contact-btn'>CONTACT US</Link>
    </div>
    <FooterComponent/>
    </>
  )
}

export default CallToActionComponent