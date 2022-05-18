import React from 'react';
import clock from '../../../../images/icons/clock.svg'
import phone from '../../../../images/icons/phone.svg'
import quote from '../../../../images/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[90%] mx-auto text-white'>
            <div class="card lg:card-side bg-base-100 shadow-xl bg-primary p-5">
                <figure>
                    <img src={clock} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div> <div class="card lg:card-side bg-base-100 shadow-xl bg-[#3A4256] p-5">
                <figure>
                    <img src={phone} alt="" />

                </figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div> <div class="card lg:card-side bg-base-100 shadow-xl bg-primary p-5">
                <figure>
                    <img src={quote} alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default Info;