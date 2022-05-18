import React from 'react';
import chair from '../../../images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Appointment.css'
const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className="w-[90%] mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='flex items-center justify-center flex-grow'>
                        <DayPicker styles={{
                            caption: { color: '#0FCFEC' }
                        }}
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        >
                        </DayPicker>

                    </div>
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={chair} class=" rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;