import React from 'react';
import icon1 from '../../../../images/fluoride.png'
import icon2 from '../../../../images/cavity.png'
import icon3 from '../../../../images/whitening.png'
import SingleService from '../SingleService/SingleService';

const Service = () => {

    const services = [
        {
            id: 1,
            "tittle": "Fluoride Treatment",
            "img": icon1,
            "des": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            "tittle": "Cavity Filling",
            "img": icon2,
            "des": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            "tittle": "Teeth Whitening",
            "img": icon3,
            "des": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]
    return (
        <div className=' w-[90%] mx-auto py-20 '>
            <div className='flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-primary text-[20px] font-semibold'>Our Services</h1>
                    <h1 className='text-[36px]'>Services We Provides</h1>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 '>
                {
                    services.map(service => <SingleService service={service} key={service.id}></SingleService>)
                }
            </div>

        </div>
    );
};

export default Service;