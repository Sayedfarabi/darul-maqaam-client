import React from 'react';
import { BiCartDownload } from 'react-icons/bi';
import { GiEternalLove } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const ProductCard = ({ data, wishHandle, userHaveWishList, userHaveBookings, user, cartHandle, }) => {
    return (


        <div className="group relative item-center justify-center overflow-hidden cursor-default hover:shadow-xl hover:shadow-black/30 trans transition-shadow mx-auto rounded-md">
            <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 rounded-md' src="https://i.pinimg.com/originals/09/83/77/098377222318e9007d396bd78b6d6033.jpg" alt="Product" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">

            </div>
            <div className="absolute inset-0 flex justify-end mt-2 mr-2 ">
                <div className=''>
                    <p>
                        <span className="badge text-red-600 badge-md">{"-40%"}</span>
                    </p>
                </div>

            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[70%] md:translate-y-[70%] group-hover:translate-y-0 transition-all">

                <div>
                    <h1 className='text-xl font-semibold text-white mb-2'>
                        Dr. Kkhandakar Abdur Rahman
                    </h1>
                </div>
                <div>
                    <p className='text-lg italic text-white mt-6 opacity-100 transition-opacity duration-300'>

                        Salat Dowa and Zikir
                    </p>
                    <div className='flex justify-between items-center mt-2'>
                        <p className='text-lg italic text-white  opacity-100 transition-opacity duration-300 font-bold'>

                            <span className='text-gray-200'>
                                <del> 180 TK</del>
                            </span>
                        </p>
                        <p className='text-lg italic text-white  opacity-100 transition-opacity duration-300 font-bold'>

                            <span className='text-amber-500'>
                                120 TK
                            </span>
                        </p>
                    </div>
                    <div className='mt-4 flex justify-center items-center'>
                        <div className="rating rating-xs mr-2">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div>
                            <p className='text-xs text-gray-100'>
                                {'(00)'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>

                    {
                        // user?.uid &&
                        <div className='w-full'>
                            <button onClick={() => wishHandle(data)}
                                className=' btn btn-sm bg-yellow-500 hover:bg-red-500 text-2xl capitalize text-black hover:text-white mx-4' disabled={userHaveWishList && true}><GiEternalLove></GiEternalLove></button>

                            <button onClick={() => cartHandle(data)}
                                className=' btn btn-sm bg-lime-400 hover:bg-red-500  text-2xl capitalize text-black hover:text-white  mx-4'
                                disabled={userHaveBookings && true}><BiCartDownload></BiCartDownload></button>
                        </div>
                    }


                </div>
            </div>

        </div>
    );
};

export default ProductCard;