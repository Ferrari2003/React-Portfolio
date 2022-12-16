import React from 'react';
import bike from '../images/motorbike-banner-designbyayesha_4x.webp';
import shop from '../images/images.jpeg';
import car from '../images/full-car-service.jpg';
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    return (
        <section className='bg-red-100 p-10'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-16'>
         <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={bike} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Used products resale</h2>
                  
                    <div className="card-actions">
                    <Link to={'/ServiceDetails'} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={shop} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Barber Shop</h2>
                   
                    <div className="card-actions">
                    <Link to={'/BarberDetails'} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={car} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Genius Car</h2>
                    
                    <div className="card-actions">
                    <Link to={'/CarDetails'} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
         </div>
        </section>
    );
};

export default ProjectCard;