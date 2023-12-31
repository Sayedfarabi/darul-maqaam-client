import React from 'react';
import errorImage from "../../assets/images/error/error-image.png";
import { Link, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    const error = useRouteError();
    useTitle("Error Page")
    return (
        <div className='flex justify-center items-center min-h-screen my-auto'>
            <div className='text-center'>
                <img src={errorImage} alt="errorImage" className='w-3/5 rounded-md mx-auto' />
                <p className='text-3xl'>Oops!</p>
                <p className='text-red-400'>Sorry, an unexpected error has occurred</p>
                <p className='text-red-400'>This Route is not found, status 404.</p>
                <p className='text-red-400'>
                    <i>{error?.statusText || error?.message}</i>
                </p>
                <p>
                    Please Back to <br /> <Link to={'/'}> <button className='btn btn-xs bg-green-500 text-white font-semibold'>Home</button> </Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;