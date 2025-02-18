import React from 'react';
import { Link } from 'react-router-dom'
import img1 from '../assets/navimg.png';
import img2 from '../assets/logo1.png';
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import './Navbar.css'

function Navbar() {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Form submitted"); // Add your form submission logic here
  };
  return (
    <>
      <header>
        <nav>
          <div id='navbar'>
            <img src={img1} alt="" />
            <div id='navlogo'>
              <img src={img2} alt="" />
            </div>
            <ul id='navanchor'>
              <li>
                <Link to='/' >
                  HOME
                </Link>
              </li>
              <li>
                <Link to='/Womens-outfits' >
                  WOMENS WEAR
                </Link>
              </li>
              <li>
                <Link to='/Mens-outfits' >
                  MENS WEAR
                </Link>
              </li>
              <li><a href=''>OUR STORES</a></li>
            </ul>
            <ul id='navicons'>
              <li>
                <form onSubmit={handleFormSubmit} id='navsearch'>
                  <div><input type="text" placeholder='Search Outfits' /></div>
                  <button><BiSearchAlt /></button>
                </form>
              </li>
              <li><a href=''><FaRegHeart /></a></li>
              <li><a href=''><IoMdCart /></a></li>
              <li>
                <a href=''>
                  <div id='navsignin'>
                    <div><FaRegUserCircle /></div>
                    <div id='signin'>Sign In</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar