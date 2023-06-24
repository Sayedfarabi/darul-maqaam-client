import React from 'react';
import logo from '../../assets/images/brand/sponsor-logo.png';

const SponsorsSection = () => {
    return (
        <section className='py-8 md:py-12 px-8 md:px-12'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='text-2xl md:text-4xl mb-6 md:mb-0'>
                    <h4>Our <br /> Sponsors</h4>
                </div>
                <div className='px-4'>
                    <div className='flex justify-between items-center'>
                        <div className='mx-auto'>
                            <img src={logo} className='w-40 h-20' alt="logo" />
                        </div>
                        <div className='mx-auto'>
                            <img src={logo} className='w-40 h-20' alt="logo" />
                        </div>
                        <div className='mx-auto'>
                            <img src={logo} className='w-40 h-20' alt="logo" />
                        </div>
                        <div className='mx-auto'>
                            <img src={logo} className='w-40 h-20' alt="logo" />
                        </div>
                        <div className='mx-auto'>
                            <img src={logo} className='w-40 h-20' alt="logo" />
                        </div>
                        <div className='mx-auto'>
                            <img src={logo} className='w-40 h-20' alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;