import React from 'react';

const Experiences = () => {
    return (
        <div>
            <div className='grid lg:grid-rows-4 sm:grid-rows-1 lg:grid-flow-col sm:grid-flow-col gap-4'>
                <div className='row-span-4 mt-14 ml-12'>
                    <div className="card w-96 rounded drop-shadow-lg bg-gray-900">
                        <div className="card-body">
                            <h2 className="text-center text-red-600 font-bold text-7xl">12</h2>
                            <p className='text-white text-center font-bold'>Years experience</p>

                        </div>
                    </div>


                </div>
                <div className='row-span-2'>
                    <div className="card w-72 rounded drop-shadow-lg bg-gray-900">
                        <div className="card-body">
                            <h2 className="text-center text-red-600 font-bold text-3xl">60+</h2>
                            <p className='text-gray-300 text-center'>Client</p>

                        </div>
                    </div>

                </div>

                <div className='row-span-2'>

                    <div className="card w-72 rounded drop-shadow-lg bg-gray-900">
                        <div className="card-body">
                            <h2 className="text-center text-red-600 font-bold text-3xl">122+</h2>
                            <p className='text-gray-300 text-center'>Completed Project</p>

                        </div>
                    </div>
                </div>

                <div className='row-span-2'>
                    <div className="card w-72 rounded drop-shadow-lg bg-slate-900">
                        <div className="card-body">
                            <h2 className="text-center text-red-600 font-bold text-3xl">8</h2>
                            <p className='text-gray-300 text-center'>Years Experience</p>

                        </div>
                    </div>

                </div>
                <div className='row-span-2'>

                    <div className="card w-72 rounded drop-shadow-lg bg-slate-900">
                        <div className="card-body">
                            <h2 className="text-center text-red-600 font-bold text-3xl">10</h2>
                            <p className='text-gray-300 text-center'>Achievement</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experiences;