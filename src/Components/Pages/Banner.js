import React from 'react';
import bnr from '../../Images/banner.jpg';


const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen mb-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bnr} />

                    <div className='text-start'>
                        <p className='text-red-600 font-bold'>Hello I'm August</p>
                        <h1 className="text-5xl font-bold text-white">Visual Designer</h1>
                        <p className="py-6 text-gray-300">Provident cupiditate voluptatem et in. Provident cupiditate <br/> voluptatem et in. provident cupiditate voluptatem et in provident.</p>
                        <button className="btn w-36 text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-600 hover:to-red-800">About Me</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;