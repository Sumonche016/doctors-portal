import React from 'react';
import appointment from '../../../../images/appointment.png'
import doctor from '../../../../images/doctor.png'
import Button from '../../Shared/Buttob/Button';

const MakeAppointment = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='mt-[2rem] lg:mt-[5rem]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <img className='mt-[-150px] hidden lg:block' src={doctor} alt="" />
                <div className='flex justify-center items-center'>
                    <div className='text-white p-3'>
                        <h1 className='text-[20px] font-semibold'>appointment</h1>
                        <h1 className='text-[26px] md:text-[36px] py-3'>Make Appointment today</h1>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making
                            it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;