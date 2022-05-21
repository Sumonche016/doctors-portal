import React from 'react';
import './Banner.css'

import chair from '../../../images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">

                <div className="w-[90%] mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex items-center justify-center flex-grow'>
                            <div>
                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src={chair} className=" rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;