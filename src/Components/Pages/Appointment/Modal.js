import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Modal.css';

const Modal = ({ treatment, date, setTreatment }) => {

    const [user] = useAuthState(auth);
    console.log(user)
    const { name, slots } = treatment;

    const handleModal = event => {
        event.preventDefault();
        setTreatment(null)

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <form onSubmit={handleModal} class="modal-box relative">
                    <label htmlFor="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold mb-3">{name}</h3>
                    <select className='mt-3 w-full  p-2 rounded-md
                   modal-input bg-[#E6E6E6]'>
                        {
                            slots?.map(slot => <option value={slot}>{slot}</option>)
                        }
                    </select>

                    <input type="text" placeholder={format(date, 'PP')} disabled className='mt-3 w-full  p-2 rounded-md text-black bg-[#E6E6E6]
                   modal-input ' />

                    <input type="text" disabled placeholder={user?.displayName || ''} className='mt-3 w-full  p-2 rounded-md
                   modal-input ' />

                    <input type="text" disabled value={user?.email || ''} className='mt-3 w-full  p-2 rounded-md
                   modal-input ' />

                    <input type="number" placeholder='Phone Number' className='mt-3 w-full  p-2 rounded-md
                   modal-input ' />
                    <input type="submit" placeholder='Submit' className='mt-3 w-full  p-2 rounded-md cursor-pointer text-white bg-[#3A4256]
                   modal-input ' />

                </form >
            </div>
        </div>
    );
};

export default Modal;