import React from 'react';
import AboutContent from '../Components/AboutContent';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import Navbar from '../Components/Navbar';

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage2 heading='ABOUT.' text='Im a Front-End Developer.'></HeroImage2>
            <AboutContent></AboutContent>
            <Footer></Footer>
        </div>
    );
};

export default About;