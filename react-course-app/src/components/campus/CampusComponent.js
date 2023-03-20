import React from 'react'
import FacilitiesComponent from '../facilities/FacilitiesComponent'
import './CampusComponent.css'
//mora require u src
const CampusComponent = () => {
  return (
    <>
    <div className='campus-main-container'>
      <h1 className='h1-text'>Our global campus</h1>
      <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <div className='row'>
        <div className='campus-column'>
          <img className='image' src={require('../../images/london.png')} alt=''/>
          <div className='layer'><h3 className='text-layer'>LONDON</h3></div>
        </div>
        <div className='campus-column'>
          <img className='image' src={require('../../images/washington.png')} alt=''/>
          <div className='layer'><h3 className='text-layer'>WASHINGTON</h3></div>
        </div>
        <div className='campus-column'>
          <img className='image' src={require('../../images/newyork.png')} alt=''/>
          <div className='layer'><h3 className='text-layer'>NEW YORK</h3></div>
        </div>
      </div>
      
    </div>
    <FacilitiesComponent/>
    </>
  )
}

export default CampusComponent