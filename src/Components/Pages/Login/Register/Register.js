import React from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

import useToken from '../../../../Hooks/Usetoken';

const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser)

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();





    let signInerror;
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (error || updateError) {
        signInerror = <p className='text-red-500'>{error?.message}</p>
    }
    if (token) {
        navigate('/appointment')
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log('update done')
        // navigate('/appointment')

    };


    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-center block mb-5">Register</h2>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}

                                />
                                <label className='label'>
                                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}

                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}

                                />

                                <label className='label'>
                                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                </label>
                            </div>



                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        minLength: {
                                            value: 6,
                                            message: "Password Should 6 charecters"
                                        },
                                        required: {
                                            value: true,
                                            message: "Password is required"
                                        }

                                    })}
                                />

                                <label className='label'>
                                    {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInerror}

                            <input className='btn w-full' type="submit" value='Register' />
                            <p className='mt-3'> <small>Already User     <Link to='/login' className='text-primary ml-1'>login</Link> </small></p>

                        </form>
                        <div className="divider">OR</div>
                        <button className="btn btn-outline"
                            onClick={() => signInWithGoogle()}
                        >Continue With google</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;