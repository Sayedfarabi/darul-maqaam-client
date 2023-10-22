import React from 'react';
import AllSlides from '../../components/Edit-Home/AllSlides';
import AddSlide from '../../components/Edit-Home/AddSlide';

const DashboardHomepage = () => {
    return (
        <section>
            <div className='flex flex-col-reverse md:flex-row justify-between items-end'>
                <div className='w-full md:w-1/2 lg:w-1/2 p-4 h-80 overflow-y-auto border'>
                    <AllSlides/>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/2 p-4'>
                    <AddSlide/>
                </div>
            </div>
        </section>
    );
};

export default DashboardHomepage;