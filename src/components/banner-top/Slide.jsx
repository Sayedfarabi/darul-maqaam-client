import React from 'react';


const Slide = ({ image }) => {
    return (

        <div className='mx-4'>
            <img src={image} className='w-full' alt="darul-maaqam-banner-item" />
        </div>

    );
};

export default Slide;