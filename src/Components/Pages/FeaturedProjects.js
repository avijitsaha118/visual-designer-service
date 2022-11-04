import React from 'react';

const FeaturedProjects = () => {
    return (
        <div className='grid grid-cols-6 gap-4 mt-12'>
            <div className='col-start-1 col-end-3 ml-16'>
                <h1 className='text-white font-extrabold font-2xl tracking-wide'>FEATURED PROJECTS</h1>
                <p className='text-gray-300'>Display our best services here.</p>
            </div>
            <div className='col-end-7 col-span-2 ml-48'>
                <button className='btn w-36 text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-600 hover:to-red-800'>VIEW ALL</button>
            </div>
        </div>
    );
};

export default FeaturedProjects;