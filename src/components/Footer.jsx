import React from 'react';
import "./css/Footer.css";

const Footer = () => {
    return (
        <>
            <footer className='footer m-3'>

            <h4 className='mb-2'>Done Looking At My Portfolio?</h4>
            <h5 className='mb-2'>Well, I Know Your Answer.</h5>
            <h6 className='mb-2'>Here Is Another Part Of My Portfolio I Have Made With Wordpress, Where I Have Showed All My Projects Which I Have Done With CMS Like WordPress and Shopify.</h6>
             <p className='mb-2'>You Will Also Get To know More Stuff About Me From There.</p>
            <a href="http://www.yeasinarafathportfolio.xyz/built-with-wordpress/" target="_blank" rel="noopener noreferrer"><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>Click To Go</button></a>

<br />
<hr />
                <small>&copy; Copyright 2022-Today for <span>Md. Yeasin Arafath Portfolio</span>.</small>
                <br />
                 <small>Designed & Developed by <span>Md. Yeasin Arafath</span>.</small> 
            </footer> 
        </>
    );
};

export default Footer;