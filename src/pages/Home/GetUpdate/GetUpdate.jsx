import React from 'react';
import phoneLogo from '../../../assets/getUpdateLogo.jpg'
const GetUpdate = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={phoneLogo} className="max-w-1/3 rounded-lg" />
                <div>
                    <h1 className="text-xl font-bold">Subscribe to our newletter!</h1>
                    <input type="email" placeholder="Enter your email" className=" my-5 input input-bordered input-info w-full max-w-xs" />
                    <button className="btn btn-success">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default GetUpdate;