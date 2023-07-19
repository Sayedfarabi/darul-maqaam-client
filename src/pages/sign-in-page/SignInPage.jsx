import React from 'react';
import logo from '../../assets/images/brand/logo(1).png';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const SignInPage = () => {
    useTitle("Sign In")
    return (
        <section className=''>
            <div className='py-4 text-center bg-green-600 text-2xl md:text-4xl text-white'>
                <h1>Login</h1>
            </div>
            <div className='min-h-[80vh] flex justify-center items-center'>

                <div className='border-2 border-green-600 rounded-md flex flex-col md:flex-row justify-center items-center w-full md:w-3/5 mx-4'>
                    <div className='bg-green-600 rounded-md border border-green-600 w-full md:w-1/2 p-8'>
                        <div>
                            <h1 className='text-2xl md:text-3xl text-white'>Login</h1>
                            <h1 className='text-xl md:text-2xl text-gray-300'>Sign In</h1>
                            <p className='mb-4 text-gray-300'>
                                By Signing Up, you can find our full
                                features of our services
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-xl text-gray-300'>Make a Donation</h1>
                            </div>
                            <div>
                                <img src={logo} className='w-32 h-16' alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className=' w-full md:w-1/2 p-8'>
                        <div>
                            <div className='mb-2'>
                                <input type="text" placeholder='Phone/Email' className='w-full border-2 border-green-600 text-green-600 text-lg md:text-xl py-2 rounded-xl px-2' />
                            </div>
                            <div>
                                <button className='text-green-600 text-lg mx-1'>Send OTP</button>
                                <button className='text-green-600 text-lg mx-1'>Reset</button>
                                <button className='text-green-600 text-lg mx-1'>Log In</button>
                                <Link to={"/"}>
                                    <button className='text-green-600 text-lg mx-1'>Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignInPage;