import React, { useEffect, useState, useRef } from 'react'
import { skillIcons } from '../assets/data/skillIcons';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const IconComponent = ({icon}) => {
  return (
      <span>{icon}</span>
  )
}

const ProjectItem = ({ item }) => {
return (
    <div className='project-item'>
      <a href={item.url} target='_blank'>
        <img src={item.image} />
        <BsFillArrowUpRightCircleFill />
      </a>
      <div className='item-content'>
        <div className='item-title'>
          <h3>{item.title}</h3>
          <div className='skills'>
            {skillIcons.map((icons) => 
                item.skills.map((skill) => 
                  icons.name == skill ?
                  <IconComponent
                    key={icons.id}
                    icon={icons.icon}
                  /> : ""
                )
              )
            }
          </div>
        </div>
        <div className='item-desc'>
          {item.desc.map((it, index) => 
            <span key={index}>{it}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem