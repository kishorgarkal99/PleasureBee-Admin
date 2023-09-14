import React, { useState } from 'react'
import google from '../../assets/icons/google.svg'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SmallLoader } from '../../components/Loader';

type LoginProp = {
    callback: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<LoginProp> = ({ callback }): JSX.Element => {

    const [errorMessage, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()

    const { email, password } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = () => {
        signIn(email, password)
    }
    const signIn = async (email: string, password: string) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        } catch (err) {
            console.error(err);
            setError("please check your email or password")
        }
        setLoading(false)
    };

    return (
        <>
            <div className="flex justify-center items-center p-4 w-full">
                <SmallLoader openloader={loading} />
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="space-y-4">
                    {
                        errorMessage && <p className="text-sm text-red-500 overflow-elispsis">{errorMessage}</p>
                    }
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            autoComplete="email"
                            onChange={onChange}
                            required
                            className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div>
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                autoComplete="current-password"
                                onChange={onChange}
                                required
                                className="block w-full rounded-md border-0 p-2 text-md text-gray-900 outline-0 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="mt-1 text-sm flex justify-end">
                            <a href="#" className="font-semibold text-pink-700 hover:text-pink-500 ">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={onSubmit}
                            className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                        >
                            Sign In
                        </button>
                    </div>
                    <hr />

                </div>

                <a href="#"
                    className="my-4 flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-md font-semibold leading-6 text-pink-700 shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                >
                    <img src={google} alt="google" className="w-6 h-6" />
                    <span className="ml-1">Sign in using Google</span>
                </a>
                <p className="mt-8 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <button onClick={() => callback(true)} className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
                        Sign Up
                    </button>
                </p>
            </div>
        </>
    )
}

export default Login