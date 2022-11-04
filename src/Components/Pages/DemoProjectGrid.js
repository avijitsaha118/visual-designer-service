import React from 'react';
import img1 from '../../Images/01.jpg';
import img2 from '../../Images/02.jpg';
import img3 from '../../Images/03.jpg';
import img4 from '../../Images/04.jpg';
import { HiArrowSmRight } from "react-icons/hi";

const DemoProjectGrid = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-x-6 gap-y-6 mt-12'>

                 <div className="rounded ml-16 drop-shadow-lg bg-gray-900">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded" />
                    </figure>

                    <div className='mt-10 bg-black'>
                        <h1 className='text-white font-bold'>Foodscape</h1>
                        <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                    </div>

                </div>

                <div className="rounded mr-16 drop-shadow-lg bg-gray-900">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded" />
                    </figure>

                    <div className='mt-10 bg-black'>
                        <h1 className='text-white font-bold'>Foodscape</h1>
                        <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                    </div>

                </div>

                <div className="rounded ml-16 drop-shadow-lg bg-gray-900">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded" />
                    </figure>

                    <div className='mt-10 bg-transparent'>
                        <h1 className='text-white font-bold'>Marco Accent</h1>
                        <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                    </div>
                </div>

                <div className="rounded mr-16 drop-shadow-lg bg-gray-900">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded" />
                    </figure>

                    <div className='mt-10'>
                        <h1 className='text-white font-bold'>Mozaik</h1>
                        <button className='flex text-red-600 text-xs font-bold'>KNOW MORE <HiArrowSmRight className='text-xl font-bold'></HiArrowSmRight> </button>
                    </div>
                </div>




            </div>

            <div className='bg-gray-900 box-border h-96 w-full p-4 -mt-48'>

            </div>

        </div>
    );
};

export default DemoProjectGrid;