import React from 'react';
import { skillIcons } from '../assets/data/skillIcons';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';
// import translationKO from "../locales/ko/translation.json"

const IconComponent = ({ icon }) => {
  return <span>{icon}</span>;
};

const ProjectItem = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className='project-item'>
      <a href={item.url} target='_blank' rel='noopener noreferrer'>
        <img src={item.image} alt={item.title} />
        <BsFillArrowUpRightCircleFill />
      </a>
      <div className='item-content'>
        <div className='item-title'>
          <h3>{t(item.title)}</h3>
          <div className='skills'>
            {skillIcons.map((icons) =>
              item.skills.map((skill) =>
                icons.name === skill ? <IconComponent key={icons.id} icon={icons.icon} /> : ''
              )
            )}
          </div>
        </div>
        <div className='item-desc'>
          {item.desc.map((it, index) => (
            <span key={index}>{it}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;