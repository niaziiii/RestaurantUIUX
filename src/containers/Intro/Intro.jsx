import { React, useState } from "react";
import { meal } from "../../constants";
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs'
function Intro() {
  const [videoPlay, setvideoPlay] = useState(false);
  const videoHandler = (cond) => {
    const videoContainer = document.querySelector('.app__Intro__video');
    if (cond) {
      videoContainer.play()
      setvideoPlay(cond)
    } else {
      videoContainer.pause()
      setvideoPlay(cond)
    }
  }

  return (
    <div className="app__Intro section__padding">
      <video
        onEnded={() => videoHandler(false)}
        src={meal}
        controls width='100%' height="100%"
        className="app__Intro__video" />
      <i>{
        videoPlay ?
          <BsPauseCircle fontSize={40} onClick={() => videoHandler(false)} /> :
          <BsPlayCircle fontSize={40} onClick={() => videoHandler(true)} />
      }
      </i>

    </div>

  );
}


export default Intro
