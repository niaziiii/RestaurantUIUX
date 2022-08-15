import React from 'react'
import Subheading from '../../components/Subheading/Subheading'
import { data, images } from '../../constants'

function Laurels() {
  return (
    <div className='app__Laurels section__padding app__bg'>
      <div className="app__Laurels__content">
        <Subheading title="Award & Recogination" />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <ul >
          {
            data.awards.map((el, i) => {
              return (
                <li className='app__Laurels__lists' key={i}>
                  <div className="app__Laurels__lists__img">
                    <img src={el.imgUrl} alt={i} />
                  </div>

                  <div className="app__Laurels__lists__content">
                    <h3>{el.title}</h3>
                    <p>{el.subtitle}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="app__Laurels__image">
        <img src={images.laurels} alt="Laurels-img" />
      </div>
    </div>

  )
}

export default Laurels