import React from 'react';
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import HeroImage2 from '../Components/HeroImage2';
import Navbar from '../Components/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImage2 heading="CONTACT." text="Lest have a chat"></HeroImage2>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Contact;