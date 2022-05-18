import React from 'react';
import auth from '../../../../firebase.init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

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

    if (gUser || user) {
        navigate(from, { replace: true });
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-center block mb-5">Log In</h2>

                        {/* email */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Email"
                                    class="input input-bordered w-full max-w-xs"
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

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    class="input input-bordered w-full max-w-xs"
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
                            <p className='mt-3'><small>New To Doctors Portal  <Link to='/register' className='text-primary'>Create Account</Link> </small></p>

                        </form>
                        <div class="divider">OR</div>
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