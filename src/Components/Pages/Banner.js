import React from 'react';
import bnr from '../../Images/banner.jpg';


const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen mb-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bnr} />

                    <div className='text-start'>
                        <p className='text-error font-bold'>Hello I'm August</p>
                        <h1 className="text-5xl font-bold text-white">Visual Designer</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Provident cupiditate <br/> voluptatem et in. provident cupiditate voluptatem et in provident.</p>
                        <button className="btn btn-error text-white">About Me</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;