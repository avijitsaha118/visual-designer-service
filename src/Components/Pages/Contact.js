import React from 'react';

const Contact = () => {
    return (
        <div className='-mt-20'>

            <div className="grid grid-cols-2 h-48 ml-16 mr-16 rounded drop-shadow-lg justify-items-center bg-gray-900 text-white">

                    <div className='mt-8 ml-8'>
                    <h2 className="font-bold text-3xl">Let's work togather on <br/> your next project!</h2>
                    <p className='text-gray-300'>If a dog chews shoes whose shoes does he choose. whose shoes does he choose.</p>
                    </div>
                    <div className="card-actions mt-20 ml-10 justify-end">
                    <button className="btn w-36 text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-600 hover:to-red-800">Contact</button>
                    </div>
                
            </div>


        </div>
    );
};

export default Contact;