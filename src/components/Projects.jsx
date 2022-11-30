import React from 'react';
import data from '../data.js';
//import InprogressProjects from './InprogressProjects.jsx';
import Project from './Project.jsx';
//import Sociallinks from './Sociallinks.jsx';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const Projects = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    {
      //<Sociallinks />
    }
    <h4 className='text-center lead m-5'>Front-End Development Projects:</h4>
    <div className="container-fluid bg-light p-5">
      {/* <InprogressProjects /> */}
      <div className="row">
        {/* <h2 className='custom-font pb-5 text-center'>Completed: </h2> */}
        {data.ProjectsData.map((project) => {
          return(
            <div className="col-12 d-flex justify-content-center" key={project.id}>
                <Project id={project.id}
                  image={project.img}
                  name={project.name}
                  stack={project.stack}
                  live={project.live}
                  source={project.source}
                  desc={project.description}
                />
            </div>
          )
        })}
      </div>
      <h4 className='text-center lead m-2'>To See My CMS Related (WordPress-Shopify) Projects : <br /><a href="http://" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>Click To Go</button></a></h4>
    </div>
    
    <Footer />
    
    </>
  )
}

export default Projects;