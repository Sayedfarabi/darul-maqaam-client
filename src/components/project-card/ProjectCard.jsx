import React from 'react';

const ProjectCard = ({ data }) => {
    return (
        <div className='mx-auto'>
            <div className='h-full flex flex-col justify-between w-full'>
                <div>
                    <div>
                        <figure>
                            <img src={data?.image} className='w-full h-52' alt="" />
                        </figure>
                    </div>
                    <div>
                        <h3 className='text-2xl text-green-600'>{data?.title}</h3>
                        <p className='text-sm'>
                            {(data?.body.length) < 100 ? (data.body) : (data.body.slice(0, 99) + " ...")}
                        </p>
                    </div>
                </div>
                <div className='mt-4'>
                    <button className='py-1 px-4 font-semibold text-white bg-green-600 capitalize text-xl md:text-3xl'>
                        Donate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;