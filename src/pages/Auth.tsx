import { useState } from 'react';
import heartlock from '../assets/hearlock.svg';


export default function Auth() {

  const [userIsNew, setUserIsNew] = useState<boolean>(false)

  return (
    <>
      <div className="max-w-sm max-h-fit p-6 bg-white border hover:shadow-xl border-pink-400 rounded-lg shadow-lg flex flex-1 flex-col justify-center p-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-16 h-16 p-1 rounded-full ring-2 ring-pink-500"
            src={heartlock}
            alt="PleasureBee"
          />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {userIsNew ? "Create your account" : "Sign in to your account"}
          </h2>
        </div>

        {userIsNew ?
          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" action="#" method="POST">
            <div className="mt-2">
                <input
                  id="uname"
                  name="uname"
                  type="text"
                  placeholder="Enter username"
                  autoComplete="uname"
                  required
                  className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  placeholder="Confirm password"
                  required
                  className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <button onClick={() => setUserIsNew(false)} className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
                Sign In
              </button>
            </p>
          </div>
          :
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-4" action="#" method="POST">
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
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
                    required
                    className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
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
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                >
                  Sign In
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <button onClick={() => setUserIsNew(true)} className="font-semibold leading-6 text-pink-700 hover:text-pink-500">
                Sign Up
              </button>
            </p>
          </div>
        }
      </div>
    </>
  )
}
