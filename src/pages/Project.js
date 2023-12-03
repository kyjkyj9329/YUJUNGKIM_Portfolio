import React, { useState, useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import { Link, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';
import translationKO from "../locales/ko/translation.json"

const projectNav = [
  { display: "all", selected: true, value: "ALL" },
  { display: "desktop", selected: false, value: "DESKTOP" },
  { display: "mobile", selected: false, value: "MOBILE" }
];

const Project = () => {
  const { t } = useTranslation();
  const [projectList, setProjectList] = useState([]);
  const location = useLocation();
  const display = new URLSearchParams(location.search).get("display");

  const getProject = async () => {
    // let url = `http://localhost:3004/project`;
    // let response = await fetch(url);
    // let data = await response.json();
    let data = translationKO;
    if (display === "all") {
      setProjectList(data);
      console.log(projectList)
    }
    if (display === "desktop") setProjectList(data.filter((list) => list.display.includes("desktop")));
    if (display === "mobile") setProjectList(data.filter((list) => list.display.includes("mobile")));
  };

  const [underline, setUnderline] = useState(projectNav);

  const clickProjectNav = (value) => {
    const underlined = underline.map((list) => {
      return {
        ...list,
        selected: value === list.value
      };
    });
    setUnderline(underlined);
  };

  useEffect(() => {
    getProject();
  }, [display]);

  return (
    <div className='Project'>
      <div className='project-container'>
        <div className='project-nav'>
          {underline.map((list) => (
            <Link
              to={`/project?display=${list.display}`}
              key={list.value}
              style={list.selected ? { borderBottom: "3px solid #333" } : {}}
              onClick={() => {
                clickProjectNav(list.value);
              }}
            >
              {list.value}
            </Link>
          ))}
        </div>
        <div className='project-main'>
          {projectList.map((item) => (
            <ProjectItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;