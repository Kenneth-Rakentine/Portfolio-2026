import React from 'react'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
    <div className='contactContainer'>
      <h1 className='contactHeadTxt'>Contact</h1>

      <ContactUs />

      <div className='contactFlex'>
        <div className='contactFloat'>
          <a href='mailto:rakentine.k@gmail.com' className='emailTxt'>Email</a>
        </div>
        <div className='contactFloat2'>
          <a href='https://www.linkedin.com/in/kenneth-rakentine' className='linkedInContactTxt'>LinkedIn</a>
        </div>
        <div className='contactFloat3'>
          <a href='https://github.com/Kenneth-Rakentine' className='githubTxt'>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
