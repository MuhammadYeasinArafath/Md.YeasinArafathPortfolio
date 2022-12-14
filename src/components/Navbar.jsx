import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <>
    <nav className="bg-light navbar navbar-expand-lg shadow-sm p-4">
      <div className="container-fluid d-sm-flex flex-column flex-lg-row justify-content-center justify-content-lg-between">

        <div className="navbar-brand mb-4 mb-md-0 mb-lg-0">
          <img src={logo} alt="logo" width="30" height="auto" className="d-inline-block align-text-top" />
          <span className="ms-2 fw-bold">Md. Yeasin Arafath</span>
        </div>
        
        <div className=" text-center">
          <NavLink to='/' className="link me-5" end>Home</NavLink>
          <NavLink to='/about' className="link me-5">About</NavLink>
          <NavLink to='/projects' className="link me-5">Projects</NavLink>
          <br />
          <br />
          <a href="http://www.yeasinarafathportfolio.xyz/" target="_blank" rel="noopener noreferrer" className="link me-5">WordPress Portfolio</a>
          <a href="https://mdyeasinarafath.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer" className="link me-5">Wix Portfolio</a>
          <a href="https://developeryeasinarafath.blogspot.com/" target="_blank" rel="noopener noreferrer" className="link me-5">Blog</a>
        </div>
        <div>
          <NavLink to='/contact' className="link">
            <button className='mt-5 m-lg-0 btn btn-primary custom-btn fw-bold'>Contact me</button>
          </NavLink>
        </div>
        
      </div>
  </nav>
  </>
  )
}

export default Navbar;