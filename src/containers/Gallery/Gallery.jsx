import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import { images } from '../../constants'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
const imagesGallery = [images.gallery01,images.gallery02,images.gallery03,images.gallery04]

function Gallery() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) =>{
    const {current} = scrollRef;
    console.log(current);
    console.log(direction);
    if (direction === "left") {
      current.scrollLeft -= 300;
    }else{
        current.scrollLeft += 300;
    }
  }
  return (
    <div className='app__Gallery section__padding'>
      <div className="app__Gallery__content">
        <Subheading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Commodi sapiente eius debitis? Officia ipsum reiciendis eaque.</p>
        <button className='custom__button'>view more</button>
      </div>
      <div className="app__Gallery__imgContainer" >
        <div className="app__Gallery__imgContainer__images" ref={scrollRef}>
          {imagesGallery.map((el,i) => {
            return(
              <div className="Gallery-img" key={i}>
                <img src={el} alt="Gallery-Images" />
              </div>
            )
          })}
        </div>
        <div className="app__Gallery__imgContainer__icons">
          <AiOutlineArrowLeft  fontSize={30} onClick= {() => scroll('left')}/>
          <AiOutlineArrowRight className='right-icon' fontSize={30} onClick= {() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery