import React from 'react';
import img1 from '../SS/1.PNG';
import img2 from '../SS/2PNG.PNG';
import img3 from '../SS/3.PNG';

const ServiceDetails = () => {
    return (
        <section className='m-32 text-center bg-red-300'>
            <div className="h-96 carousel py-5 carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                    <img src={img1} alt='' />
                </div>
                <div className="carousel-item h-full">
                    <img src={img2}  alt=''/>
                </div>
                <div className="carousel-item h-full">
                    <img src={img3} alt='' />
                </div>
                
            </div>
            <div className='p-7'>
                <div className='mb-4 text-2xl '>
                    <h1 className='text-black'>Technology: <span> HTML, CSS Tailwind CSS React JavaScript Firebase DaisyUi MongoDB Node Js</span> </h1>
                </div>
                <a href="https://used-products-a78d7.web.app/" className='ml-2'><button className='btn btn-outline'>Live Site</button></a>
                <a href="https://github.com/Ferrari2003/used-product-resale-client-side" className='ml-2'><button className='btn btn-outline'>Github Client code</button></a>
                <a href="https://github.com/Ferrari2003/used-product-resale-server-side" className='ml-2'><button className='btn btn-outline'>Server code</button></a>
            </div>
        </section>
    );
};

export default ServiceDetails;