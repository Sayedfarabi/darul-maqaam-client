import React from 'react';
import image from '../../assets/images/background/students-bg.jpg';

const OurProject = () => {
    return (
        <section>
            <div className='overflow-hidden relative h-[500px]'>
                <img src={image} className='absolute inset-0 w-full h-[500px] object-cover' alt="" />
                <div className='absolute inset-0 bg-green-700 bg-opacity-75'>
                    <div className='h-full flex justify-center items-center text-center text-8xl text-white'>
                        <h6>OUR <br /> PROJECT <br /> SO FAR</h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProject;