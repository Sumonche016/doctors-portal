import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className='shadow-lg rounded-md p-10 flex justify-center'>
            <div className='text-center'>
                <h1 className='text-primary text-[20px] font-semibold mb-1'>{name}</h1>
                <p>
                    {
                        slots ?
                            <span>{slots[0]}</span>
                            : <span className='text-red-600'>No Slot Avialable</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>


                <label onClick={() => setTreatment(service)} htmlFor="my-modal-3" className=" modal-button mt-4 drop-shadow-md btn btn-primary
                 bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] 
                  text-white">Book Appointmentl</label>
            </div>
        </div>
    );
};

export default Service;