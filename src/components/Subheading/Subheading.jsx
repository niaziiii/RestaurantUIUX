import React from 'react'
import { images } from '../../constants'



function Subheading({title}) {
  return (
    <div className='subheading'>
        <p className='p__cormorant'>{title}</p>
        <img src={images.spoon} alt="SpoonImg" />
    </div>
  )
}

export default Subheading