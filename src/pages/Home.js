import React from 'react'
import ContactData from '../assets/data/contactdata';
import { BsInstagram, BsGithub, BsEnvelope } from 'react-icons/bs';

export const Home = () => {
  return (
    <div className='Home'>
      <div className='home-container'>
        <h1>YUJUNG KIM</h1>
        <div className='sub'>
          <span>Frontend Developer</span>
          <span>프론트엔드 개발자 김유정</span>
        </div>
        <div className='sns'>
          <a href={ContactData[1].url} target='blank'>
            <BsInstagram />
          </a>
          <a href={ContactData[2].url} target='blank'>
            <BsGithub />
          </a>
          <a href={ContactData[0].url} target='blank'>
            <BsEnvelope />
          </a>
        </div>
      </div>
    </div>
  )
}
