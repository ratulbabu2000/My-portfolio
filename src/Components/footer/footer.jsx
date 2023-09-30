import React from 'react'
import "./footer.css"
import Wave from '../../Wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import GItHub from '@iconscout/react-unicons/icons/uil-github'

const footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt='' style={{width: "100%"}} />
      <div className='f-content'>
        <span>ratulbabu2000@gmail.com</span>
        <div>
        <Insta/>
        <FB/>
        <GItHub/>
      </div>
      </div>
    </div>
  )
}

export default footer