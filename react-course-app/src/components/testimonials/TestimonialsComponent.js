import React from 'react'
import CallToActionComponent from '../call-to-action/CallToActionComponent'
import './TestimonialsComponent.css'

const TestimonialsComponent = () => {
  return (
    <>
    <div className='testimonials-main-component'>
       <h1 className='h1-testimonials'>What Our Students Says</h1>
       <p className='p-testimonials'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       <div className='row'>
            <div className='testimonials-column'>
                <img className='image-testimonials' src={require('../../images/user1.jpg')} alt=''/>
                <div>
                    <p className='p-text-test'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <h3 className='h3-text-test'>Christine Barkley</h3>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                    
                </div>
            </div>
            <div className='testimonials-column'>
                <img className='image-testimonials' src={require('../../images/user2.jpg')} alt=''/>
                <div>
                    <p className='p-text-test'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <h3 className='h3-text-test'>David Byer</h3>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    <CallToActionComponent/>
    </>
  )
}

export default TestimonialsComponent