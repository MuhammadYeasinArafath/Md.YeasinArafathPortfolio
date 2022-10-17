import React from 'react';
import SharedLayout from '../components/SharedLayout';
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';
import "../components/css/Home.css";
import Footer from './Footer';

const Home = () => {
  return (
     <>
     <SharedLayout></SharedLayout>
    <section className="bg-light p-5 min-vh-100">
      <div className='container-fluid'>
       <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className=''>Hi, I'm Md. Yeasin Arafath</h1>
            <h1 className='fw-bold custom-font textAnimation1..'>Web Developer.  </h1>
            <p className='pt-5 textAnimation2..'>Front-End Development / ReactJS Developer / Programmer.</p>
            <NavLink to='/projects'><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>My Work</button></NavLink>
          </div>

          <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_pwohahvd.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '700px', maxWidth: '700px' }}
            />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Home;