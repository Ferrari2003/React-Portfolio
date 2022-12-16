import React from 'react';
import img7 from '../SS/7.PNG';
import img8 from '../SS/8.PNG';
import img9 from '../SS/9.PNG';

const CarDetails = () => {
    return (
        <section className='m-32 text-center bg-indigo-300'>
            <div className="h-96 carousel py-5 carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                    <img src={img7} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img8} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img9} alt='' />
                </div>
            </div>
            <div className='p-7'>
                <div className='mb-4 text-2xl'>
                    <h1 className='text-black'>Technology: <span> HTML, CSS Tailwind CSS React JavaScript Firebase DaisyUi MongoDB Node Js</span> </h1>
                </div>
                <a href="https://genius-car-89861.web.app/" className='ml-2'><button className='btn btn-outline'>Live Site</button></a>
                <a href="https://github.com/Ferrari2003/genius-car-client" className='ml-2'><button className='btn btn-outline'>Github Client code</button></a>
                <a href="https://github.com/Ferrari2003/genius-car-server" className='ml-2'><button className='btn btn-outline'>Server code</button></a>
            </div>
        </section>
    );
};

export default CarDetails;