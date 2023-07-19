import React from 'react';
import item1 from '../../assets/images/images/hero/banner_slide01.png';
import item2 from '../../assets/images/images/hero/banner_slide02.png';
import item3 from '../../assets/images/images/hero/banner_slide03.png';
import icon1 from '../../assets/images/icons/Charlity.png';
import icon2 from '../../assets/images/icons/Education.png';
import icon3 from '../../assets/images/icons/Youtube.png';

const BannerTop = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center py-8 md:py-12'>
            <div className='w-full md:w-1/2 mx-4 ml-8 md:ml-16 '>
                <div>
                    <h2 className='text-3xl md:text-5xl text-white font-semibold mb-2'>
                        Lets Create Something <br /> Great Together!
                    </h2>
                    <p className='text-xl md:text-2xl text-[#FFE600]'>
                        Darul Maqaam foundation is a non-political, <br />
                        dedicated Charitable Organization for human
                        Welfare.
                    </p>
                </div>
                <div className='mt-10 md:mt-44'>
                    <div className='grid grid-cols-3 gap-4 mb-4'>
                        <div className='flex justify-start items-center mr-8'>
                            <div className='mr-4'>
                                <img src={icon1} className='w-12 h-12' alt="darul maaqam charlity icon" />
                            </div>
                            <div className='text-lg text-white'>
                                <p>Charlity</p>
                            </div>
                        </div>
                        <div className='col-span-1 md:col-span-2 flex justify-start items-center'>
                            <div className='mr-4'>
                                <img src={icon2} className='w-12 h-12' alt="darul maaqam education icon" />
                            </div>
                            <div className='text-lg text-white'>
                                <p>Education</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mb-4'>

                        <div className='flex justify-start items-center mr-8'>
                            <button className='btn btn-md w-full rounded-full bg-white text-green-600 text-xl capitalize'>
                                Donate
                            </button>
                        </div>
                        <div className='col-span-1 col-span-2 flex justify-start items-center'>
                            <div className='mr-4'>
                                <img src={icon3} className='w-12 h-12' alt="darul maaqam youtube icon" />
                            </div>
                            <div className='text-lg text-white'>
                                <p>Watch Youtube</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 mx-2 invisible md:visible'>
                <div>
                    <div className='mx-4'>
                        <img src={item1} className='w-full mx-auto' alt="darul-maaqam-banner-item" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;