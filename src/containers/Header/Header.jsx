import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import { images } from '../../constants'

function Header() {
  return (
    <div className='app__Header section__padding'>
        <div className="app__Header__content">
          <Subheading title='Chase the new Flavour'/>
          <h1 className='headtext__cormorant'>The key to Fine dining</h1>
          <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className="app__Header__image">
          <img src={images.welcome} alt="Home Wellcome" />
        </div>
    </div>
  )
}

export default Header