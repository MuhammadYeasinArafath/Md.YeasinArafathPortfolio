import React from 'react';
import "../components/css/SocialLinks.css";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Sociallinks = () => {
    return (
        <>
              <div className="icons">
                <ul>
                    <li className='fb'><a href="https://www.facebook.com/md.yeasin.arafath.165/" target="_blank" rel="noopener noreferrer"><MdFacebook></MdFacebook></a></li>
                    <li className='tw'><a href="https://twitter.com/MdYeasi54066810" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle></AiFillTwitterCircle></a></li>
                    <li className='lin'><a href="https://www.linkedin.com/in/md-yeasin-arafath-097918214/" target="_blank" rel="noopener noreferrer"><BsLinkedin></BsLinkedin></a></li>
                    <li className='gib'><a href="https://github.com/MuhammadYeasinArafath" target="_blank" rel="noopener noreferrer"><BsGithub></BsGithub></a></li>
                    <li className='re'><a href="https://www.reddit.com/user/mdyeasinarafath" target="_blank" rel="noopener noreferrer"><BsReddit></BsReddit></a></li>
                    <li className='me'><a href="https://medium.com/@mdyeasinarafathofficial" target="_blank" rel="noopener noreferrer"><BsMedium></BsMedium></a></li>
                    <li className='you'><a href="https://www.youtube.com/channel/UCIt8fh9lM7gJkJWiuNAI7Cw" target="_blank" rel="noopener noreferrer"><BsYoutube></BsYoutube></a></li>
                </ul>
              </div>
        </>
    );
};

export default Sociallinks;