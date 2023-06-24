import React from 'react';
import image from '../../assets/images/background/book-bg.png';

const Publication = () => {
    return (
        <section>
            <div className='overflow-hidden relative h-[500px]'>
                <img src={image} className='absolute inset-0 w-full h-[500px] object-cover' alt="" />
                <div className='absolute inset-0 bg-green-600 bg-opacity-30'>
                    <div className='h-full flex justify-center items-center text-center text-5xl md:text-7xl text-white'>
                        <div>
                            <h3 className='text-xl md:text-3xl text-yellow-600'>Darul Maqaam Foundation</h3>
                            <h6>PUBLICATION</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publication;