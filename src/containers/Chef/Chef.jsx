import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import { images } from '../../constants'

function Chef() {
  return (
    <div className='app__Chef app__bg section__padding'>
       <div className="app__Chef__image">
        <img src={images.chef} alt="Chef_Image" />
       </div>
       <div className="app__Chef__content">
        <Subheading title='Chef’s Word'/>
        <h1 className='headtext__cormorant'>What we believe in</h1>
        <p className='p__cormorant'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        <h3>Kevin Luo</h3>
        <p className=''>Chef & Founder</p>
        <h2>Kevin Luo</h2>
       </div>
    </div>
  )
}

export default Chef