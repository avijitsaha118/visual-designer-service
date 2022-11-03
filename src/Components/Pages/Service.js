import React from 'react';
import { SlNote } from "react-icons/sl";
import { HiArrowSmRight } from "react-icons/hi";

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
                    <div>
                        <SlNote className='text-3xl'></SlNote>
                    </div>
                    <h2 className="card-title text-start">{name}</h2>
                    <p className='text-white text-start'>{description}</p>
                    <div className="card-actions justify-start">
                        <button className='font-bold'> KNOW MORE <HiArrowSmRight></HiArrowSmRight> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;