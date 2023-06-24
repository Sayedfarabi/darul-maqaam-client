import React from 'react';
import logo from '../../assets/images/brand/logo(1).png';
import image from '../../assets/images/images/gallery/section/gallery-section.png';

const ProjectGallerySection = () => {
    return (
        <section className='py-8 md:py-12 min-h-[70vh] bg-green-600'>
            <div className='flex flex-col-reverse md:flex-row justify-center items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='mx-auto p-4 md:p-8'>
                        <img src={logo} className='w-48 h-24 mx-auto' alt="" />
                    </div>
                    <div className='text-center p-4 md:p-8 text-white'>
                        <h1 className='text-2xl md:text-4xl'>REMARKABLE</h1>
                        <h4 className='text-4xl md:text-8xl'>PROJECT GALLERY</h4>
                    </div>
                </div>
                <div className='w-full md:w-1/2 mx-auto'>
                    <img src={image} className='w-full p-6 md:p-8' alt="" />
                </div>
            </div>
        </section>
    );
};

export default ProjectGallerySection;