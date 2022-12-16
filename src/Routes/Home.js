import React from 'react';
import Footer from '../Components/Footer';
import HeroImage from '../Components/HeroImage';
import Navbar from '../Components/Navbar';
import Skills from '../Components/Skills';
import Works from '../Components/Works';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage></HeroImage>
            <Works></Works>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;