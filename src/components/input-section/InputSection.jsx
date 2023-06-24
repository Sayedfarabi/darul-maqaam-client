import React from 'react';

const InputSection = () => {
    return (
        <section>
            <div className='py-8 px-8 md:px-12 bg grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='mx-auto'>
                    <input type="text" name="" id="" placeholder='Select Donation Found' className='w-60 py-4 border border-black text-center' />
                </div>
                <div className='mx-auto'>
                    <input type="text" name="" id="" placeholder='Phone/Email' className='w-60 py-4 border border-black text-center' />
                </div>
                <div className='mx-auto'>
                    <input type="text" name="" id="" placeholder='Donation Amount' className='w-60 py-4 border border-black text-center' />
                </div>
            </div>
        </section>
    );
};

export default InputSection;