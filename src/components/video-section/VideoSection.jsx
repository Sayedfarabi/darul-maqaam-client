import React from 'react';

const VideoSection = () => {
    return (
        <section className='py-8 px-8 md:px-12'>
            <div className='pb-6'>
                <h4 className='text-center text-4xl md:text-7xl text-green-600'>Videos</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='mx-auto'>
                    <video src="" className='w-full h-80' controls ></video>
                </div>
                <div className='mx-auto'>
                    <video src="" className='w-full h-80' controls ></video>
                </div>
                <div className='mx-auto'>
                    <video src="" className='w-full h-80' controls ></video>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;