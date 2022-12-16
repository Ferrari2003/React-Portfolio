import React from 'react';
import Footer from '../Components/Footer';
import HeroImage2 from '../Components/HeroImage2';
import Navbar from '../Components/Navbar';
import ProjectCard from '../Components/ProjectCard';




const Project = () => {
    return (
        <div>
           <Navbar></Navbar>
           <HeroImage2 heading="PROJECTS." text="some of my most recent works"></HeroImage2>
           <ProjectCard></ProjectCard>
           <Footer></Footer>
        </div>
    );
};

export default Project;