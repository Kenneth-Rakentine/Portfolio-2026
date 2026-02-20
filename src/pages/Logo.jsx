import React from 'react'

function Logo() {
  return (
    <div className='cubeContainer'>

      <div className='heroLeft'>
        <span className='heroLabel'>Portfolio</span>
        <h2 className='heroHeading'>
          IT<br />SECURITY
        </h2>
        <p className='heroBio'>
          Methodical and technically driven, with experience spanning network security, endpoint troubleshooting, and system hardening. B.S. in Cybersecurity and Information Assurance from WGU with a focus on turning real-world technical instincts into security expertise.
        </p>
        <p className='heroSubheading'>Based in Pittsburgh</p>
      </div>

      <div className='heroRight'>
        <div className='geoBox'>
          <div className='geoBoxInner'></div>
        </div>

        <div className='heroStats'>
            <div className='heroStat'>
            <span className='heroStatLabel'>Certifications</span>
            <span className='heroStatValue'>A+ / Network+ / Security+ / Project+ / ITIL 4 / LPI</span>
          </div>
          <div className='heroStat'>
            <span className='heroStatLabel'>Frontend</span>
            <span className='heroStatValue'>React / JS / CSS</span>
          </div>
          <div className='heroStat'>
            <span className='heroStatLabel'>Backend</span>
            <span className='heroStatValue'>Node.js / Express</span>
          </div>
          <div className='heroStat'>
            <span className='heroStatLabel'>Database</span>
            <span className='heroStatValue'>SQL / MongoDB</span>
          </div>
          <div className='heroStat'>
            <span className='heroStatLabel'>Status</span>
            <span className='heroStatValue'>Open to Work</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Logo
