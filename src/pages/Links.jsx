import React from 'react'

function Links() {
  const linkedIn = 'https://www.linkedin.com/in/kenneth-rakentine-a48ab9277/'
  const gitLink  = 'https://github.com/Kenneth-Rakentine?tab=repositories'
  const igLink   = 'https://www.credly.com/users/kenneth-rakentine/badges#credly'

  return (
    <div className='linksContainer'>
      <a href={linkedIn} target="_blank" rel="noreferrer" className='linkItem'>
        LinkedIn
      </a>
      <a href={gitLink} target="_blank" rel="noreferrer" className='linkItem'>
        GitHub
      </a>
      <a href={igLink} target="_blank" rel="noreferrer" className='linkItem'>
        Certifications
      </a>
    </div>
  )
}

export default Links
