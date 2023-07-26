import React from 'react';


const Card = ({ data }) => {
    return (
        <div className='mx-auto'>
            <div>
                <img src={data?.image} className='w-full' alt="product" />
            </div>
            <div>
                <h3 className='text-3xl text-green-600'>{data?.title}</h3>
                <p className='text-sm'>
                    {data?.body}
                </p>
            </div>
        </div>



    );
};

export default Card;