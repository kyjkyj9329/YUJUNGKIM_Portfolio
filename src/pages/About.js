import React from 'react'
import ContactData from '../assets/data/contactdata';
import image0 from '../assets/img/image0.jpeg'
import image1 from '../assets/img/image1.jpeg'
import { BsInstagram, BsGithub, BsEnvelope, BsFileEarmarkText } from 'react-icons/bs';
import { SiVelog } from 'react-icons/si';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import { skillIcons } from '../assets/data/skillIcons';

export const About = () => {
  return (
    <div className='About'>
      <div className='about-container'>
        <div className='about-main'>
          <div className='about-profile'>
            <img src={image1} width={100}/>
            <div className='profile-content'>
              {ContactData.map((data) => 
                <div>
                  {data.icon}
                  <a href={data.url}>
                    {data.name}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className='about-desc'>
            <BiSolidQuoteLeft className='quoteIcon' />
            <div className='desc-content'>
              <span>
                <span className='text-highlight-yellow'>창의적</span>이고 <span className='text-highlight-yellow'>꼼꼼한</span> 프론트엔드 개발자 김유정 입니다.
              </span>
              <span>프론트엔드에만 국한되지 않고 백엔드에도 관심을 가지며,</span>
              <span>
                새로운 것을 배우고 발전하는 것에 흥미를 느낍니다.
              </span>
              <span>
                <span className='text-highlight-pinkGradient'>열정</span>으로 가득한 저의 앞으로의 <span className='text-highlight-pinkGradient'>성장</span>을 기대해주세요!
              </span>
            </div>
            <BiSolidQuoteRight className='quoteIcon' />
          </div>
        </div>
        <div className='about-aside'>
          <div className='card'>
            <div>SKILLS</div>
            <div className='tags'>
              {skillIcons.map((icon) => 
                <span className={icon.name}>{icon.name}</span>
              )}
            </div>
          </div>
          <div>
            <div className='card'>
              <SiVelog />
              <span>VELOG</span>
            </div>
            <div className='card'>
              <BsFileEarmarkText />
              <span>RESUME</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}