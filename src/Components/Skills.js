import React from 'react';
import './Skillss.css';
import unnamed from '../images/unnamed.png';
import css from '../images/cascading-style-sheets-css-label-high-performance-vector-stock-illustration_100456-8387.webp';
import bootstrap from '../images/bootstrap-icon-css.png';
import tailwind from '../images/tailwind.png';
import dasiUi from '../images/daisy.webp';
import javascript from '../images/360_F_386459614_7JRoaj5LBSbum74i1LXf3oaoMnxQwJdu.jpg';
import react from '../images/reactlogo_4x.webp';
import firebase from '../images/a5c1a790c83da3e86168d2c1328929bd.png';
import mongoDB from '../images/erkxwhl1gd48xfhe2yld.png';
import nodejs from '../images/nodejs-new-pantone-white-512.webp';


const Skills = () => {
    return (
        <section className="skill bg-teal-100" id="skill">

            <h1 className="text-center text-4xl text-black font-bold p-10 ">My Skills</h1>

            <div className="box-container bg-indigo-300">
                <div className="box">
                    <img src={unnamed} alt="" />
                </div>
                <div className="box">
                    <img src={css} alt="" />
                </div>
                <div className="box">
                    <img src={bootstrap} alt="" />
                </div>
                <div className="box">
                    <img src={tailwind} alt="" />
                </div>
                <div className="box">
                    <img src={dasiUi} alt="" />
                </div>
                <div className="box">
                    <img src={javascript} alt="" />
                </div>
                <div className="box">
                    <img src={react} alt="" />
                </div>
                <div className="box">
                    <img src={firebase} alt="" />
                </div>
                <div className="box">
                    <img src={mongoDB} alt="" />
                </div>
                <div className="box">
                    <img src={nodejs} alt="" />
                </div>


            </div>

        </section>
    );
};

export default Skills;