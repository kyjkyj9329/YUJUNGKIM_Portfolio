import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

// const navIndexInit = [
//   {
//     index: 1,
//     name: "ABOUT",
//   },
//   {
//     index: 2,
//     name: "ABOUT",
//   },
//   {
//     index: 3,
//     name: "ABOUT",
//   },
//   {
//     index: 4,
//     name: "ABOUT",
//   }
// ]
export const Navigation = () => {
  // const [navIndex, setNavIndex] = useState(navIndexInit[0]);
  return (
    <div className='Navigation'>
      <Link to={'/'} className='index'>
        <span>01</span>
      </Link>
      <Link to={'/about'} className='index'>
        <span>02</span>
      </Link>
      <Link to={'/project'} className='index'>
        <span>03</span>
      </Link>
      <Link to={'/contact'} className='index'>
        <span>04</span>
      </Link>
    </div>
  )
}
