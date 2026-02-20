import React from 'react'

function Footer() {
  const footerClicker = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className='footContainer'>
      <p className='footerTxt'>
        © 2026 Kenny Rakentine. All rights reserved.
      </p>
      <span
        className='footLogoText'
        onClick={footerClicker}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && footerClicker()}
      >
        ↑ TOP
      </span>
    </div>
  )
}

export default Footer
