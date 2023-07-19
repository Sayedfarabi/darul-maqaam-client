import React from 'react';
import bannerImg from '../../assets/images/images/hero/banner.png';
import bannerLogo from '../../assets/images/brand/banner-logo.png';
import BannerTop from '../banner-top/BannerTop';

const BannerSection = () => {
    return (
        <section>
            <div className="">
                <div className='relative'>
                    <div>
                        <img src={bannerImg} className='h-[800px] md:h-full' alt="darul-maaqam banner" />
                    </div>
                    <div className='absolute top-0'>
                        <BannerTop></BannerTop>
                    </div>
                    <div className='absolute bottom-4 md:bottom-60'>
                        <div className='flex flex-col md:flex-row justify-center items-center mx-4 md:mx-12'>
                            <div className='w-28 md:w-48 h-20 md:h-24 w-full mx-auto md:w-1/4'>
                                <img src={bannerLogo} className='w-32 h-24 mx-auto' alt="darul maaqam banner logo" />
                            </div>
                            <div className='w-full md:w-3/4'>
                                <div className='w-full md:w-3/4'>
                                    <p className='text-lg font-bold text-[#FFE600]'>
                                        Darul Maqaam Foundation
                                    </p>
                                    <p className='text-xs md:text-sm text-gray-200 text-justify'>
                                        <span className='text-[#FFE600] text-lg font-bold'>D</span>
                                        arul Maqaam Foundation is a renowned law firm in Dhaka, Bangladesh. We are providing and deal
                                        ing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act, Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Registration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh. e Adviser is a renowned law firm in Dhaka, Bangladesh. We are providing and dealing with all sorts of legal and professional services and matters to operate and run in connection with the Companies Act, Trade Organization Act, Societies Registration Act, Trust Act, Income Tax Ordinance, Sales Tax, Gift Tax, Customs Act, Value Added Tax Act, Estate Duty Act, Patent-Design and Trademark Reg
                                        istration Act, Copyright Act, Bangladesh Accounting Standard (BSA), International Accounting Standard (IAS) and any other Acts which are prevailing and operative in Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BannerSection;