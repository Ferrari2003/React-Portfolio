import React from 'react';
import './Works.css';
import programming from '../images/7-New-programming-languages-for-developers-to-learn-in-2020.jpeg';
import img1 from '../images/img1.webp';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpeg';
import img5 from '../images/img5.png';
import img6 from '../images/img6.jpg';


const Works = () => {
    return (
        <section className="work " id="work">

        <h1 className="text-3xl text-center p-7 bg-violet-200 ">My <span className='text-black font-bold'>Works</span></h1>

        <div className="box-container">
            <div className="box">
            <img src={programming} alt="" />
            </div>
            <div className="box">
            <img src={img1} alt="" />
            </div>
            <div className="box">
            <img src={img2} alt="" />
            </div>
            <div className="box">
            <img src={img3} alt="" />
            </div>
            <div className="box">
            <img src={img4} alt="" />
            </div>
            <div className="box">
            <img src={img5} alt="" />
            </div>
            <div className="box">
            <img src={img6} alt="" />
            </div>
        </div>

    </section>
    );
};

export default Works;