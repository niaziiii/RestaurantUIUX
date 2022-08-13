import React from 'react'
import { images } from '../../constants'

function Aboutus() {
  return (
    <div className='app__Aboutus section__padding app__bg'>
      <div className="app__Aboutus__coverImage">
        <img src={images.G} alt="MainGimage" />
      </div>
      <div className="app__Aboutus__content">
            <div className="app__Aboutus__content__text-right">
              <h2 className="headtext__cormorant">About Us</h2>
              <img src={images.spoon} alt="Spoon" />
              <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            </div>
            <div className="app__Aboutus__content__knife">
              <img src={images.knife} alt="knife" />
            </div>
            <div className="app__Aboutus__content__text-left">
              <h2 className="headtext__cormorant">Our History</h2>
              <img src={images.spoon} alt="Spoon" />
              <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            </div>
      </div>
    </div>
  )
}

export default Aboutus