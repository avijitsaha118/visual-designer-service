import React from 'react';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const colors = ['black', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div>
            <div className="card w-96 text-white" style={{
                backgroundColor: randomColor
            }}>
                <div className="card-body">
                    <h2 className="card-title text-start">{name}</h2>
                    <p className='text-white text-start'>{description}</p>
                    <div className="card-actions justify-start">
                        <h1 className='font-bold'>KNOW MORE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;