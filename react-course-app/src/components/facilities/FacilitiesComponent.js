import React from 'react'
import TestimonialsComponent from '../testimonials/TestimonialsComponent'
import './FacilitiesComponent.css'

const FacilitiesComponent = () => {
  return (
    <>
    <div className='facilities-main-container'>
        <h1 className='h1-text'>Our facilities</h1>
        <p className='p-main-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className='row'>
            <div className='facilities-column'>
                <img className='image' src={require('../../images/library.png')} alt=''/>
                <h3 className='h3-text'>World Class Library</h3>
                <p className='p-text-fac'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='facilities-column'>
                <img className='image' src={require('../../images/basketball.png')} alt=''/>
                <h3 className='h3-text'>Largest Play Ground</h3>
                <p className='p-text-fac'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className='facilities-column'>
                <img className='image' src={require('../../images/library.png')} alt=''/>
                <h3 className='h3-text'>Tasty and Healthy</h3>
                <p className='p-text-fac'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
        </div>
        
    </div>
    <TestimonialsComponent/>
    </>
  )
}

export default FacilitiesComponent