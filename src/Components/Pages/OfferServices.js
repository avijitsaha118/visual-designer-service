import React from 'react';
import { SlNote } from "react-icons/sl";
import { HiArrowSmRight } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";

const OfferServices = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 lg:ml-12 mb-12 sm:ml-16'>
            <div className="card w-72 text-white bg-gray-900 rounded ml-14">
                <div className="card-body">
                    <div>
                        <MdDesignServices className='text-4xl'></MdDesignServices>
                    </div>
                    <h2 className="card-title text-start font-bold">UI Design</h2>
                    <p className=' text-gray-300'>Last 10 Years I extremely experienced in this field. You can complete your individual.</p>
                    <div className="card-actions justify-start">
                        <button className='font-bold'> KNOW MORE <HiArrowSmRight></HiArrowSmRight> </button>
                    </div>
                </div>
            </div>

            <div className="card w-72 text-white bg-gradient-to-r from-red-600 to-red-800 rounded ml-16">
                <div className="card-body">
                    <div>
                        <SlNote className='text-4xl'></SlNote>
                    </div>
                    <h2 className="card-title text-start font-bold">Product Design</h2>
                    <p className='text-gray-300 text-start'>Last 10 Years I extremely experienced in this field. You can complete your individual.</p>
                    <div className="card-actions justify-start">
                        <button className='font-bold'> KNOW MORE <HiArrowSmRight></HiArrowSmRight> </button>
                    </div>
                </div>
            </div>

            <div className="card w-72 text-white bg-gray-900 rounded ml-8">
                <div className="card-body">
                    <div>
                        <TfiLocationArrow className='text-4xl'></TfiLocationArrow>
                    </div>
                    <h2 className="card-title text-start font-bold">Branding</h2>
                    <p className='text-gray-300 text-start'>Last 10 Years I extremely experienced in this field. You can complete your individual.</p>
                    <div className="card-actions justify-start">
                        <button className='font-bold'> KNOW MORE <HiArrowSmRight></HiArrowSmRight> </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OfferServices;