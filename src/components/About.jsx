import React from 'react';
import SharedLayout from '../components/SharedLayout';
import me from "../assets/personal/me.png";
import resume from '../assets/resume.pdf'
import Footer from './Footer';

const About = () => {
  return (
    <>
    <SharedLayout></SharedLayout>
    <div className='container-fluid bg-light pt-5 d-flex flex-column align-items-center min-vh-100'>
      <img src={me} alt="ME" style={{height: '120px', width: '120px'}}/>

      <p className="text-center lead m-5">
        I'm a react web developer with 6+ months of experience in web development. I love creating responsive websites using HTML5, CSS3, Bootstrap5, Reactjs, Wordpress, Shopify and Wix. 
        I enjoy converting UI designs into real websites. I've done multiple small projects to learn basics and now doing more complex projects. 
        {/* Apart form this, i'm learning flutter for my final year project (FYP) */}
      </p>

  {/* Resume */}
      <a href={resume} download className="btn btn-primary mt-5 custom-btn fw-bold">Download My Resume</a>

  {/* Languages and tools I use or Skills */}
      <h3 className='pt-5 pb-2 custom-color fw-bold text-center'>Skills:</h3>

      <h6 className='pt-2 pb-2 custom-color fw-bold text-center'>Languages</h6>
          <p className=' mx-5 text-center'>HTML5, &nbsp; CSS3, &nbsp; JAVASCRIPT</p>
      <h6 className='pt-2 pb-2 custom-color fw-bold text-center'>Frameworks</h6>
          <p className=' mx-5 text-center'>Bootstrap5, &nbsp; Tailwind CSS, &nbsp; Material UI, &nbsp; React-JS</p>
      <h6 className='pt-2 pb-2 custom-color fw-bold text-center'>Tools</h6>
          <p className=' mx-5 text-center'>VS Code, &nbsp; Git, &nbsp; Github, &nbsp; NPM, &nbsp; Netlify, &nbsp; Figma, &nbsp; API</p>
      <h6 className='pt-2 pb-2 custom-color fw-bold text-center'>Authentication</h6>
          <p className=' mx-5 text-center'>Firebase</p>
      <h6 className='pt-2 pb-2 custom-color fw-bold text-center'>CMS Development</h6>
          <p className=' mx-5 text-center'>WordPress, &nbsp; Shopify &nbsp; </p>


       {/* Currently Learning */}
      {/*
      
      <h3 className="pt-5 pb-2 custom-color">Currently Learning: </h3>
      <p className=' mx-5 text-center'></p>
  */}
  {/* Experience 
  <h3 className='pt-5 pb-2 custom-color fw-bold text-center'>Experience:</h3>
   <p className=' mx-5 text-center'></p>*/}

  {/* Education */}
     <h3 className="pt-3 pb-2 custom-color fw-bold text-center">Education: </h3>
     <p className=' mx-5 text-center'>H.S.C. from Feni National Collage</p>
     <p className=' mx-5 text-center'>Group: Science</p>
     <p className=' mx-5 text-center'>GPA: 4.08</p>
     <p className=' mx-5 text-center'>Year: 2020</p>
  
  {/* Responsive Intro Video */}
     <h3 className="pt-3 pb-2 custom-color fw-bold m-5 p-5 text-center">Intro Video: </h3>
                 
                 <div className="ratio ratio-16x9  text-center thumbnail">
                 <iframe
                  src="https://www.youtube.com/embed/qkXi-Zoiwjk"
                  title="YouTube video" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                  ></iframe>
                  </div>
    </div>
    <Footer />
    </>
  )
}

export default About;