import React from 'react'

function Name() {
  const reload = () => {
    window.location.href = '/'
  }

  return (
    <div className='namecontainer'>
      <div className='nameImgBkg'>
        <h1 className='nameTxt' onClick={reload}>
          KENNETH<br />RAKENTINE
        </h1>
        <p className='nameSubtxt'>SECURITY · NETWORKING · SYSTEMS</p>
      </div>
    </div>
  )
}

export default Name
