import React from 'react'
import './Styles/Contact.css'
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-form">
          <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your name' required /><br />
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' required /><br />
            <label htmlFor="">Message</label>
            <textarea name="message" id="message"></textarea>
            <input type="submit" value='submit' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact