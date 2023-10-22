/* eslint-disable array-callback-return */
import React from 'react';
import icon1 from '../../assets/images/icons/Charlity.png';
import icon2 from '../../assets/images/icons/Education.png';
import icon3 from '../../assets/images/icons/Youtube.png';
import Slider from './Slider';


const BannerTop = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center py-8 md:py-12'>
            <div className='mx-4 ml-8 md:ml-16'>
                <div className='text-center md:text-start'>
                    <h2 className='text-2xl md:text-4xl text-white font-semibold mb-2'>
                        Lets Create Something <br /> Great Together!
                    </h2>
                    <p className='text-xs md:text-lg text-[#FFE600]'>
                        Darul Maqaam foundation is a non-political, <br />
                        dedicated Charitable Organization for human
                        Welfare.
                    </p>
                </div>
                <div className='mt-10 md:mt-20'>
                    <div className='grid grid-cols-3 md:grid-cols-3 gap-4 mb-4'>
                        <div className='flex justify-start items-center mr-8'>
                            <div className='mr-4'>
                                <img src={icon1} className='w-8 h-8' alt="darul maaqam charlity icon" />
                            </div>
                            <div className='text-sm md:text-base text-white'>
                                <p>Charlity</p>
                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-2 flex justify-start items-center'>
                            <div className='mr-4'>
                                <img src={icon2} className='w-8 h-8' alt="darul maaqam education icon" />
                            </div>
                            <div className='text-sm md:text-base text-white'>
                                <p>Education</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-4 mb-4'>

                        <div className='flex justify-start items-center'>
                            <div className='mr-4'>
                                <img src={icon3} className='w-8 h-8' alt="darul maaqam youtube icon" />
                            </div>
                            <div className='text-sm md:text-base text-white'>
                                <p>Watch Youtube</p>
                            </div>
                        </div>

                        <div className='flex justify-start items-center mr-8 mt-4'>
                            <button className='btn btn-sm px-8 rounded-md bg-transparent hover:bg-[#FFE600] text-white hover:text-green-600 text-base md:text-lg capitalize'>
                                Donate
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='invisible md:visible'>
                <div>

                    <Slider></Slider>


                </div>
            </div>
        </div>
    );
};

export default BannerTop;