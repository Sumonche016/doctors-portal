import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvialableAppointment from './AvialableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvialableAppointment date={date}></AvialableAppointment>


        </div>
    );
};

export default Appointment;