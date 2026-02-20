import React from 'react'
import { useNavigate } from 'react-router-dom'

function Name() {
  const navigate = useNavigate()

  return (
    <div className='namecontainer'>
      <div className='nameImgBkg'>
        <h1 className='nameTxt' onClick={() => navigate('/about')}>
          KENNETH<br />RAKENTINE
        </h1>
        <p className='nameSubtxt'>SECURITY · NETWORKING · SYSTEMS</p>
      </div>
    </div>
  )
}

export default Name
