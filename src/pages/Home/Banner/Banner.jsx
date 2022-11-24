import React from 'react';
import banner from '../../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${banner}")`, backgroundAttachment:'fixed'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Sell Your Mobile</h1>
                    <p className="mb-5">At this place you can buy or sell used mobile phone at your price  range and your area.</p>
                    <h3>We provide best quality mobile</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;