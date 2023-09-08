import React, { useState } from 'react'
import google from "../../assets/icons/google.svg"
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

type RegProp = {
  callback: React.Dispatch<React.SetStateAction<boolean>>
}
interface Admin {
  username: string,
  email: string,
  password: string
}

const Register: React.FC<RegProp> = ({ callback }): JSX.Element => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const { username, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target.value,
    }))
  }

  const onSubmit = () => {

    const admin = {
      username,
      email,
      password,
    };
    setLoading(true)
    handleReg(admin)
  };

  const handleReg = async (newAdmin: Admin) => {
    const q = query(collection(db, "admin"), where("email", "==", newAdmin.email))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.docs.length) {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
          .then(async () => {
            const docRef = await addDoc(collection(db, "admin"), newAdmin)
            console.log("Registered with ID: ", docRef.id)
            navigate("/")
            setLoading(false)
          })
          .catch((error) => {
            console.log(error.code, error.message)
          })
      } catch (e) {
        console.error("Error: ", e);
      }
    } else {
      setError("This email is already used in another account")
    }
  }

  return (
    <>
      <Loader openloader={loading} />
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-4">
          {
            errorMessage && <p className="text-sm text-red-500 overflow-elispsis">{errorMessage}</p>
          }
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username"
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={onChange}
              required
              className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
            />
          </div>
          {/* <div>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            placeholder="Confirm password"
            onChange={onChange}
            required
            className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
          />
        </div> */}

          <div>
            <button
              onClick={onSubmit}
              className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
            >
              Sign Up
            </button>
          </div>
          <hr />

          <a href="#"
            className="my-4 flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-md font-semibold leading-6 text-pink-700 shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
          >
            <img src={google} alt="google" className="w-6 h-6" />
            <span className="ml-1">Sign up using Google</span>
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <button onClick={() => callback(false)} className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
            Sign In
          </button>
        </p>
      </div>
    </>
  )
}

export default Register

