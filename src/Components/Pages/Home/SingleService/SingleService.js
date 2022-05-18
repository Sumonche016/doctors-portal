import React from 'react';

const SingleService = ({ service }) => {
    const { img, id, des, tittle } = service
    return (
        <div>
            <div class="  card card-compact w-96 bg-base-100 shadow-xl text-center flex justify-center items-center p-[1rem]">

                <img className='w-[100px]' src={img} alt="Shoes" />
                <div class="card-body">
                    <h2 class="card-title text-center block ">{tittle}</h2>
                    <p className=''>{des}</p>
                </div>

            </div>
        </div>
    );
};

export default SingleService;
