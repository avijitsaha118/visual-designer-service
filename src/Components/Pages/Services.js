import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-8'>
            <div className='grid grid-cols-3 gap-4 ml-6'>
                
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
            </div>

        </div>
    );
};

export default Services;