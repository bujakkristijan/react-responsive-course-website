import React from 'react'
import './CourseComponent.css'
import CampusComponent from '../campus/CampusComponent';

const CourseComponent = () => {
  return (
    <>
    <div className='course-main-container'>
        <div className='course-container'>
            <h1 className='h1-text'>Courses we offer</h1>
            <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='row'>
                <div className='course-column'>
                    <h3>Intermediate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Ut venenatis tellus in metus.</p>
                </div>
                <div className='course-column'>
                    <h3>Degree</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Ut venenatis tellus in metus.</p>
                </div>
                <div className='course-column'>
                    <h3>Post Graduation</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices gravida dictum fusce ut placerat. Ut venenatis tellus in metus.</p>
                </div>
            </div>
        </div>
        <CampusComponent/>
    </div>
    </>
  )
}

export default CourseComponent