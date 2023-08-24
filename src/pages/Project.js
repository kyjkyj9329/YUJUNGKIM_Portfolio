import React, { useState, useEffect } from 'react'
import { ProjectData } from '../assets/data/projectdata';
import ProjectItem from '../components/ProjectItem';
import { Link } from 'react-router-dom';
import { useLocation, useSearchParams } from "react-router-dom"

const projectNav = [
  { display: "all", selected: true, value: "ALL" },
  { display: "desktop", selected: false, value: "DESKTOP"  },
  { display: "mobile", selected: false, value: "MOBILE"  }
]

export const Project = () => {
  const [projectList, setProjectList] = useState([]);
  const getProject = async () => {
    let url = `https://my-json-server.typicode.com/kyjkyj9329/YUJUNGKIM_Portfolio/ProjectData`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProduct();
  }, []);
  
  // const [projectList, setProjectList] = useState(ProjectData);
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

  const [searchParams] = useSearchParams();
  const display = searchParams.get("display");

  useEffect(() => {
    setProjectList(ProjectData);
    if (display === 'desktop')
    setProjectList(ProjectData.filter((data) => data.display == 'desktop'))
    if (display === 'mobile')
    setProjectList(ProjectData.filter((data) => data.display == 'mobile'))
  }, [display]);

  return (
    <div className='Project'>
      <div className='project-container'>
        <div className='project-nav'>
          {underline.map((list) => {
            return (
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
            );
          })}
        </div>
        <div className='project-main'>
          {projectList.map((item) => 
            <ProjectItem item={item} key={item.id} />
          )}

        </div>
      </div>
    </div>
  )
}
