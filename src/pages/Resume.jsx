import React from 'react'

function Resume() {
  const resumeUrl = `${process.env.PUBLIC_URL}/files/Kenneth Rakentine Resume.pdf`

  const openLink = () => {
    window.open(resumeUrl, '_blank')
  }

  const download = () => {
    const a = document.createElement('a')
    a.href = resumeUrl
    a.download = 'Kenneth_Rakentine_Resume.pdf'
    a.click()
  }

  return (
    <div className='resumeSection'>
      <h1 className='resumeHeadTxt'>Resume</h1>
      <div>
        <button className='hyperlinkResume' onClick={openLink}>Open Resume</button>
        <button className='resumeBtn' onClick={download}>Download Resume</button>
      </div>
    </div>
  )
}

export default Resume
