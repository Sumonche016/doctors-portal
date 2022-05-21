import React, { useState } from 'react';
import auth from '../../../../firebase.init'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../../Hooks/Usetoken';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [email, setEmail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const [token] = useToken(gUser || user)

    const location = useLocation()
    const navigate = useNavigate()

    let from = location?.state?.from?.pathname || '/'

    let signInerror;


    if (gError || error) {
        signInerror = <p className='text-red-500'>{gError?.message || error?.message}</p>
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };


    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-center block mb-5">Log In</h2>

                        {/* email */}

                        <form onSubmit={handleSubmit(onSubmit)}>
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

                            <input className='btn w-full' type="submit" value='LogIn' />

                            <p className='mt-3'><small>Forget Password ?
                                <button className="btn btn-link">
                                    Reset Here</button> </small></p>
                            <p className='mt-3'><small>New To Doctors Portal  <Link to='/register' className='text-primary'>Create Account</Link> </small></p>

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

export default Login;