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
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
            {userIsNew ? "Create Your Account" : "Sign In To your Account"}
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
              <hr />

              <a href="#"
                className="my-4 flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-md font-semibold leading-6 text-pink-700 shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
              >
                <svg className="w-6 h-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#F11A7B">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#178]">

                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="ml-1">Sign up using Google</span>
              </a>
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
                  className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
                >
                  Sign In
                </button>
              </div>
              <hr />

              <a href="#"
                className="my-4 flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-md font-semibold leading-6 text-pink-700 shadow-md hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700"
              >
                <svg className="w-6 h-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#F11A7B">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#178]">

                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="ml-1">Sign in using Google</span>
              </a>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
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
