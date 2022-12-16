import React from 'react';
import img4 from '../SS/4.PNG';
import img5 from '../SS/5.PNG';
import img6 from '../SS/6.PNG';

const BarberDetails = () => {
    return (
        <section className='m-32 text-center bg-stone-300'>
            <div className="h-96 carousel py-5 carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                    <img src={img4} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img5} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img6} alt='' />
                </div>
            </div>
            <div className='p-7'>
                <div className='mb-4 text-2xl'>
                    <h1 className='text-black'>Technology: <span> HTML, CSS Tailwind CSS React JavaScript Firebase DaisyUi MongoDB Node Js</span> </h1>
                </div>
                <a href="https://barber-shop-47f23.web.app/" className='ml-2'><button className='btn btn-outline'>Live Site</button></a>
                <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-Ferrari2003" className='ml-2'><button className='btn btn-outline'>Github Client code</button></a>
                <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-Ferrari2003" className='ml-2'><button className='btn btn-outline'>Server code</button></a>

            </div>
        </section>
    );
};

export default BarberDetails;