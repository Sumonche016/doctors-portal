import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Service from './Service';

const AvialableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(data => data.json())
            .then(res => setServices(res))
    }, [])
    console.log(services)
    return (
        <div>
            <div className='flex justify-center py-20' >
                <div className='text-center text-[22px]'>
                    <p className=' text-primary'>Available Service on {format(date, 'PP')}</p>
                    <p className='text-[#939393]'>Please Select a Service</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] mx-auto'>
                {
                    services.map(service => <Service setTreatment={setTreatment} key={service._id} service={service}></Service>)
                }
            </div>

            {
                treatment && <Modal date={date} treatment={treatment} setTreatment={setTreatment}></Modal>
            }

        </div>
    );
};

export default AvialableAppointment;