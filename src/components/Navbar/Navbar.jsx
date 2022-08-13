import React from 'react'
import { useState } from 'react';

import {images} from './../../constants/index';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';


function Navbar() {
  const [navbarToggle, setnavbarToggle] = useState(false);

  return (
    <div className='app__Navbar'>
      <div className="app__Navbar__logo">
        <img src={images.gericht} alt="djdj" />
      </div>
      <ul className="app__Navbar__lists">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Menu">Menu</a></li>
        <li><a href="#Award">Award</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="app__Navbar__Logins">
        <a href="#Login">Login / Register</a>
        <div></div>
        <a href="#Book">Book Table</a>
      </div>
      <div className="app__Navbar__small-Screen">
        <GiHamburgerMenu fontSize={27} onClick={()=>{ setnavbarToggle(true)}}/>

        {
          navbarToggle && (
          <div className="app__Navbar__small-Screen__overlay slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className='closeNavBar' onClick={()=> setnavbarToggle(false)}/>
          <ul className="app__Navbar__small-Screen__lists">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Menu">Menu</a></li>
          <li><a href="#Award">Award</a></li>
          <li><a href="#Contact">Contact</a></li>
          <div className="app__Navbar__small-Screen__logins">
            <a href="#Login">Login / Register</a>
            <a href="#Book">Book Table</a>
          </div>
          </ul>
        </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar