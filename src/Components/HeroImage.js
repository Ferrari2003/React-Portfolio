import React from 'react';
import "./HeroImageStyle.css";
import saiful from '../images/saiful.jpg';
import { Link } from 'react-router-dom';

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
            <img className='into-img' src={saiful} alt="saiful" />
            </div>
            <div className='content'>
                <p>HI, I' am Saiful Islam</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to={'/project'} className="btn">Projects</Link>
                    <Link to={'/contact'} className="btn btn-light">Contact</Link>                  
                    <a href="https://drive.google.com/file/d/1OmhHlBoxkP_OlAgtyZQZxxp2PJjESt8o/view?usp=share_link" className='btn'>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;