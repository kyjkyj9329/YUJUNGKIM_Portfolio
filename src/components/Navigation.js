import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className='Navigation'>
      <div>
        <button onClick={() => changeLanguage('ko')}>한국어</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </div>
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
