import React from 'react';
import './FooterStyle.css';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer bg-black'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: '#fff', marginRight: "2rem" }} />
                        <div>
                            <p>Manikganj 1800.</p>
                            <p>Dhaka Bangladesh.</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />+8801776187539</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />ak1644137@gmail.com</h4>
                    </div>

                </div>
                <div className='right'>
                    <h4>About </h4>
                    <p>This is my portfolio website link</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaGithub size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;