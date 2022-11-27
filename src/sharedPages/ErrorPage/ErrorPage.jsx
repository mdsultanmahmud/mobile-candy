import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from '../../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div className='h-[100vh] w-[100vw] grid place-items-center'>
            <div>
                <img src={errorPic} className='h-[300px] md:w-1/2 mx-auto' alt="" />
                <h3 className='uppercase text-2xl font-semibold text-center my-2 text-red-400'>Something went wrong</h3>
                <Link to={'/'}><button className='btn btn-warning mx-auto block'>Back to homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;