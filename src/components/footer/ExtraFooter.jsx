import React from 'react';

const ExtraFooter = () => {
    return (
        <div className='py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-sm'>
                <div>
                    <p className='text-green-600'>
                        Copyright © 2023 e- Darul Maqaam Foundation_. All rights reserved.
                    </p>
                    <p>
                        Terms and conditions | Privacy Policy
                    </p>
                </div>
                <div>
                    <p>
                        Technical support by - <span className='text-green-600'>Hotchpotch Innovations Limited</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExtraFooter;