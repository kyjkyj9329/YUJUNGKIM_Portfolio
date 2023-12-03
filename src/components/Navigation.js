import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

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
      <Link to={'/'}>
        <span>01</span>
      </Link>
      <Link to={'/about'}>
        <span>02</span>
      </Link>
      <Link to={'/project'}>
        <span>03</span>
      </Link>
      <Link to={'/contact'}>
        <span>04</span>
      </Link>
    </div>
  )
}
