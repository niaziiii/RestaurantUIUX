import React  from "react";
// import { meal } from "../../constants";
import viddeo from './../../assets/meal.mp4'
// import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
function Intro() {
  // const [videoPlay, setvideoPlay] = useState(false);
  let icon ='⏯'
  return (
    <div className="app__Intro">
      <video  controls width='100%' height="100%" className="app__Intro__video"/>
      <source src={viddeo} type="video/mp4"/>
      <i>{icon}</i>
      
    </div>

  );
}

export default Intro;
