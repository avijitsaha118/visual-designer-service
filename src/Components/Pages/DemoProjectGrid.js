import React from 'react';
import img1 from '../../Images/01.jpg';
import img2 from '../../Images/02.jpg';
import img3 from '../../Images/03.jpg';
import img4 from '../../Images/04.jpg';
import { HiArrowSmRight } from "react-icons/hi";

const DemoProjectGrid = () => {
    return (
        <div className='grid grid-cols-2 gap-4 mt-10'>


            <div className="card w-1/2 h-48 ml-36 rounded drop-shadow-lg bg-gray-900">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" className="rounded" />
                </figure>

                <div className='mt-8 bg-black'>
                    <h1 className='text-white font-bold'>The Vintage</h1>
                    <button className=' flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                </div>
            </div>

            <div className="card w-1/2 h-48 rounded drop-shadow-lg bg-gray-900">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" className="rounded" />
                </figure>

                <div className='mt-8 bg-black'>
                    <h1 className='text-white font-bold'>Foodscape</h1>
                    <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                </div>

            </div>



            <div className="card w-1/2 h-48 ml-36 rounded drop-shadow-lg bg-gray-900">
                <figure className="px-10 pt-10">
                    <img src={img3} alt="Shoes" className="rounded" />
                </figure>

                <div className='mt-8 bg-black'>
                    <h1 className='text-white font-bold'>Marco Accent</h1>
                    <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                </div>
            </div>

            <div className="card w-1/2 h-48 rounded drop-shadow-lg bg-gray-900">
                <figure className="px-10 pt-10">
                    <img src={img4} alt="Shoes" className="rounded" />
                </figure>

                <div className='mt-8 bg-black'>
                    <h1 className='text-white font-bold'>Mozaik</h1>
                    <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                </div>
            </div>




        </div>
    );
};

export default DemoProjectGrid;