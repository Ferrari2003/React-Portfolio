import React from 'react';
import { Link } from 'react-router-dom';
import './AboutContent.css';
import react1 from '../images/react1.jpg';
import react2 from '../images/react2.webp';




const AboutContent = () => {
    return (
        <section className='bg-yellow-100'>
            <div className='about bg-emerald-100'>
                <div className='left text-3xl font-black '>
                    <h1 className='text-black'>Who Am I?</h1>
                    <p className='text-black'>Im a react front-end developer. I create responsive secure websites for my client.</p>
                    <Link to='/contact'>
                        <button className='btn'>Contact</button>
                    </Link>
                </div>
                <div className='right'>
                    <div className='img-container'>
                        <div className='img-stack top'>
                            <img src={react1} className="img" alt="true" />
                        </div>
                    </div>
                    <div className='img-container'>
                        <div className='img-stack bottom'>
                            <img src={react2} className="img" alt="true" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg bg-black p-16'>
                <div>
                    <h1 className='text-3xl mb-3 '>Hi there,</h1>
                    <p>
                        My name is Saiful Islam.I am a React JS developer. I am an expert with Html, CSS, Tailwind, Bootstrap, Javascript, ReactJS, Node Js, Firebase, and MongoDB.As a React developer, I know basic to advanced level things about Front-end-developer. My previous learning experiences have strengthened my capabilities. I consider myself a quick learner, self-motivated, responsible, disciplined, and deadline-oriented Person who can work under pressure and solve problems in critical situations with analytical knowledge and the latest technology.
                    </p>

                </div>
                <div className='text-2xl mt-7'>
                    <h3 className='text-white'>Name:  <span className='text-orange-300'>Saiful Islam</span></h3>
                    <h3 className='text-white'>Age:  <span className='text-orange-300'>19</span></h3>
                    <h3 className='text-white'>Email:  <span className='text-orange-300'>ak1644137@gmail.com</span></h3>
                    <h3 className='text-white'>Phone:  <span className='text-orange-300'>+8801776187539</span></h3>
                    <h3 className='text-white'>Post: <span className='text-orange-300'>Font-end Developer</span></h3>
                    <h3 className='text-white'>Language: <span className='text-orange-300'>Bangla and English</span></h3>
                </div>
            </div>

        </section>
    );
};

export default AboutContent;