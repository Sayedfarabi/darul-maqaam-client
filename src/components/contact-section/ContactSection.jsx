import React from 'react';

const ContactSection = () => {
    return (
        <section className='py-8 md:py-12 px-8 md:px-12'>
            <div className='mb-4'>
                <h4 className='text-2xl md:text-4xl text-green-600 mb-4'>Contact</h4>
                <p className='text-xl md:text-2xl'>
                    Give a Contribution <br /> making smile !
                </p>
                <p className='text-xs'>
                    Give A Contribution To Make Smile
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='mr-0 md:mr-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div className=''>
                            <label htmlFor="" id=''>Name :</label>
                            <input type="text" id='' className='w-full border bg-gray-50' />
                        </div>
                        <div>
                            <label htmlFor="" id=''>Email :</label>
                            <input type="email" id='' className='w-full border bg-gray-50' />
                        </div>
                        <div>
                            <label htmlFor="" id=''>Phone :</label>
                            <input type="number" id='' className='w-full border bg-gray-50' />
                        </div>
                        <div>
                            <label htmlFor="" id=''>Subject :</label>
                            <input type="text" id='' className='w-full border bg-gray-50' />
                        </div>
                        <div>
                            <label htmlFor="" id=''>Message :</label>
                            <input type="text" id='' className='w-full border bg-gray-50' />
                        </div>
                    </div>
                    <div>
                        <button className='py-2 px-4 capitalize text-white bg-green-600 hover:bg-green-300 ease-in-out duration-300 rounded-md'>Send Request</button>
                    </div>
                </div>
                <div className='mr-0 md:ml-4'>
                    <div className='w-2/3'>
                        <div className='mb-4'>
                            <h1 className='text-xl md:text-2xl text-green-600'>Keep in Touch</h1>
                        </div>
                        <div className='font-semibold'>
                            <p className='mb-2 md:mb-3 leading-none'>Email <br />
                                info@darulmaqaamfoundation.com
                                darulmaqaamfoundation@gmail.com</p>
                            <p className='mb-2 md:mb-3 leading-none'>
                                Call Us <br />
                                +880 1918-390119
                            </p>
                            <p className='mb-2 md:mb-3 leading-none'>
                                Address <br />
                                Tropical Alauddin Tower 11th Floor Flat 11/B
                                Plot 32/C Road 02 Sector 03 Uttara Dhaka
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;