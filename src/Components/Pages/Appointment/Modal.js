import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './Modal.css';

const Modal = ({ treatment, date, setTreatment, refetch }) => {

    const [user] = useAuthState(auth);

    const { _id, name, slots } = treatment;
    const formatedDtate = format(date, 'PP')
    const handleModal = event => {

        event.preventDefault();

        const slots = event.target.slot.value

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDtate,
            slots,
            patient: user.email,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.sucess) {
                    toast(`Appointmemnt is set, ${formatedDtate} at ${slots}`)
                } else {
                    toast.error(`Already have an appointment on , ${data.booking?.date} at ${data.booking?.slots}`)

                }
                refetch()
                setTreatment(null)

            })



    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleModal} className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-3">{name}</h3>
                    <select name="slot" className='mt-3 w-full  p-2 rounded-md
                   modal-input bg-[#E6E6E6]'>

                        {
                            slots?.map((slot, index) =>

                                <option key={index} value={slot}>{slot}</option>
                            )
                        }
                    </select>

                    <input type="text" placeholder={format(date, 'PP')} disabled className='mt-3 w-full  p-2 rounded-md text-black bg-[#E6E6E6]
                   modal-input ' />

                    <input type="text" disabled placeholder={user?.displayName || ''} className='mt-3 w-full  p-2 rounded-md
                   modal-input ' />

                    <input type="text" disabled value={user?.email || ''} className='mt-3 w-full  p-2 rounded-md
                   modal-input ' />

                    <input type="number" placeholder='Phone Number' name='phone' className='mt-3 w-full  p-2 rounded-md
                   modal-input ' />
                    <input type="submit" placeholder='Submit' className='mt-3 w-full  p-2 rounded-md cursor-pointer text-white bg-[#3A4256]
                   modal-input ' />

                </form >
            </div>
        </div>
    );
};

export default Modal;