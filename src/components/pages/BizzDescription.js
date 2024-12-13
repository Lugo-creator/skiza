import React from 'react'
import './BizzDescription.css'
import Footer from '../Footer'
//import { Link } from 'react-router-dom'

function BizzDescription() {
  return (
    <>
    <div className='room'>
        <form className='form'>
        <p className='label'>Business Owner</p>
        <input type="text" placeholder="Enter your name" className='input' required/>
        <p className='label'>Business Name</p>
        <input type="text" placeholder="Enter name of your business" className='input' required/>
        <p className='label'>Phone number</p>
        <input type="text" placeholder="Phone number" className='input' required />
        <p className='label'>Business Description</p>
        <textarea className='descriptionInput' placeholder='Briefly describe your business' rows={4} cols={50} />
        <br />
        <button className='submit'>Submit</button>
        </form>
    </div>
    <Footer />
    </>  
  )
}

export default BizzDescription;
