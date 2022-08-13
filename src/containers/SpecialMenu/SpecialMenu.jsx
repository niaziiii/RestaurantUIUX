import React from "react";
import Subheading from "../../components/Subheading/Subheading";
import { data, images } from "../../constants";

function SpecialMenu() {
  const genLists = (obj,i) => {
    return (
      <div className="app__specialMenu__content__lists" key={`${i + obj.tags}`}>
        <div className="app__specialMenu__content__lists__heading">
          <h2>{obj.title}</h2>
          <div></div>
          <p>{obj.price}</p>
        </div>
        <div className="app__specialMenu__content__lists__text">
          <p>{obj.tags}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="app__specialMenu">
      <div className="app__specialMenu__text">
        <Subheading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today’s Special</h1>
      </div>

      <div className="app__specialMenu__content">
        <div className="app__specialMenu__content__drinks">
          <h1>Wine & Beer</h1>
          {data.wines.map((el,i) => genLists(el,i))}
        </div>
        <div className="app__specialMenu__content__image">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__specialMenu__content__drinks">
          <h1>Wine & Beer</h1>
          {data.cocktails.map((el,i) => genLists(el,i))}
        </div>
      </div>
      <div className="app__specialMenu__button">
        <button type="button" className="custom__button">Added to serve</button>
      </div>
    </div>
  );
}

export default SpecialMenu;
