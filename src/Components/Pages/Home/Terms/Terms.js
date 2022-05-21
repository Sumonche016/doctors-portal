import React from 'react';
import treatment from '../../../../images/treatment.png'

const Terms = () => {
    return (
        <div className='w-[90%] mx-auto py-20'>
            <div className=" lg:card-side  ">
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex justify-center'>
                        <img className='h-[576px] w-[500px]' src={treatment} alt="" />
                    </div>
                    <div className=" flex justify-center items-start flex-col">
                        <div>
                            <h2 className="text-[48px] mb-5 leading-none font-bold">Exceptional Dental Care, on Your Terms</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that
                                it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page.</p>
                            <button className="btn btn-primary mt-5">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;