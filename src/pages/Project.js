import React, { useState, useEffect } from 'react'
import ProjectItem from '../components/ProjectItem';
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom"
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../redux/action';

const projectNav = [
  { display: "all", selected: true, value: "ALL" },
  { display: "desktop", selected: false, value: "DESKTOP"  },
  { display: "mobile", selected: false, value: "MOBILE"  }
]

export const Project = () => {
  const loading = true;
  const [projectList, setProjectList] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams)
  const display = searchParams.get("display");
  const getProject = async () => {
    let url = `https://my-json-server.typicode.com/kyjkyj9329/YUJUNGKIM_Portfolio/project`;
    let response = await fetch(url);
    let data = await response.json();
    // if (display === "all")
    setProjectList(data)
    if (display === "desktop")
    setProjectList(data.filter((list) => list.display == "desktop"))
    if (display === "mobile")
    setProjectList(data.filter((list) => list.display.includes("mobile")))
  }

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
  }, [underline]);

  // if (loading) {
  //   return (
  //     <div className="loader">
  //       <ClipLoader color="#000" size={150} />
  //     </div>
  //   ) 
  // }
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
