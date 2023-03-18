import React from 'react'
import { Link } from 'react-router-dom';

import CourseComponent from '../course/CourseComponent';
import './HomeComponent.css';

const HomeComponent = () => {
  return (
    <>
    <div className='home-main-container'>
        <div className='home-content-container'>
          <h1 className='title'>World's biggest university</h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link to='' className='visit-btn'>Visit us to know more</Link>
        </div>
        
    </div>
    <CourseComponent/>
    
    </>
  )
}

export default HomeComponent