import SimpleBarChart from "../components/charts/BarChart"
import SimpleLineChart from "../components/charts/SimpleLineChart"
import SimplePiechart from "../components/charts/MultiAixisLine"
import Layout from "../components/Layout"
import users from "../assets/icons/users_white.svg"

const Home = (): JSX.Element => {
  return (
    <Layout title="PleasureBee/Dashboard">
      <div className="my-6 mx-2 shadow-xl min-h-full flex flex-col flex-1 bg-gray-100 rounded-lg">
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-pink-600 rounded-full shadow-lg">
                  <img src={users} alt="users icon" />
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Total Users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    1200 +
                  </p>
                </div>
              </div>

              <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-purple-700 rounded-full shadow-lg">
                  <svg
                    fill="#ffffff"
                    height="48px"
                    width="48px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 460.38 460.38"
                    stroke="#ffffff"
                    strokeWidth="4.603800000000001"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M434.043,99.656c-16.975-16.987-39.549-26.342-63.563-26.342c-20.822,0-40.558,7.028-56.502,19.964 c-15.949-12.933-35.687-19.961-56.502-19.961c-24.014,0-46.59,9.354-63.566,26.336c-6.397,6.396-11.723,13.625-15.903,21.526 c-11.533,3.305-22.267,8.893-31.605,16.448c-35.27-28.532-87.283-26.413-120.074,6.368C9.35,160.984,0,183.56,0,207.565 c0,24.017,9.351,46.593,26.329,63.571l113,113c1.953,1.953,4.512,2.929,7.071,2.929s5.118-0.976,7.071-2.929l98.889-98.889 l54.549,54.549c1.876,1.875,4.419,2.929,7.071,2.929s5.196-1.054,7.071-2.929l112.989-113 c16.984-16.985,26.339-39.561,26.339-63.571C460.38,139.204,451.025,116.627,434.043,99.656z M146.4,362.923L40.472,256.994 C27.271,243.793,20,226.239,20,207.565c0-18.666,7.271-36.22,20.471-49.428c27.26-27.251,71.606-27.252,98.858-0.001 c3.906,3.905,10.236,3.905,14.143,0c9.304-9.304,20.95-15.761,33.678-18.673c0.14-0.032,0.278-0.067,0.415-0.104 c9.767-2.187,20.044-2.254,29.874-0.169c13.215,2.784,25.28,9.335,34.889,18.943c13.202,13.211,20.473,30.766,20.473,49.431 c0,8.38-1.502,16.633-4.382,24.386l-7.141-7.141c1.64-5.563,2.483-11.335,2.483-17.245c0-16.251-6.331-31.533-17.824-43.027 c-10.224-10.235-23.761-16.497-38.033-17.625c-1.6-0.14-3.236-0.208-5.002-0.208c-10.688,0-21.177,2.794-30.301,8.063 c-4.606,2.639-8.89,5.925-12.73,9.766L146.4,178.003l-13.466-13.466c-11.488-11.499-26.771-17.832-43.034-17.832 c-16.253,0-31.534,6.332-43.031,17.829c-11.479,11.479-17.802,26.761-17.802,43.031c0,16.27,6.322,31.552,17.802,43.031l92.46,92.46 c1.876,1.875,4.419,2.929,7.071,2.929s5.195-1.053,7.071-2.929l78.349-78.349l6.398,6.398L146.4,362.923z M240.671,125.97 c5.216-2.356,10.915-3.605,16.809-3.605c10.909,0,21.169,4.251,28.889,11.971l20.529,20.53c3.905,3.905,10.235,3.906,14.141,0.002 l20.542-20.531c7.72-7.72,17.979-11.971,28.889-11.971c10.916,0,21.18,4.251,28.899,11.971c7.713,7.713,11.961,17.973,11.961,28.889 c0,10.908-4.249,21.169-11.96,28.888l-85.4,85.39l-30.347-30.348c6.015-12.263,9.177-25.798,9.177-39.591 c0-24.005-9.35-46.581-26.328-63.571C258.926,136.448,250.194,130.378,240.671,125.97z M228.581,192.114 c-6.305-6.306-10.26-14.314-11.51-22.912c5.463,2.007,10.444,5.195,14.718,9.474c7.654,7.654,11.892,17.805,11.964,28.61 L228.581,192.114z M169.757,182.931c3.675,16.482,11.925,31.63,24.152,43.865l23.769,23.769L146.4,321.843l-85.389-85.389 c-7.702-7.702-11.944-17.961-11.944-28.889c0-10.927,4.242-21.187,11.944-28.889c7.719-7.719,17.979-11.971,28.889-11.971 c10.917,0,21.176,4.25,28.889,11.971l20.54,20.54c3.906,3.905,10.236,3.905,14.143,0L169.757,182.931z M419.898,212.654 L313.98,318.583L208.054,212.656c-11.692-11.7-18.725-26.82-20.185-43.091c2.856-1.127,5.843-1.925,8.901-2.385 c0.921,14.657,7.067,28.474,17.668,39.076l92.46,92.46c1.953,1.953,4.512,2.929,7.071,2.929c2.559,0,5.118-0.976,7.07-2.928 l92.476-92.464c11.487-11.5,17.814-26.781,17.814-43.027c0-16.258-6.328-31.54-17.818-43.031 c-11.498-11.497-26.783-17.829-43.042-17.829c-16.251,0-31.533,6.332-43.029,17.827l-13.469,13.462l-13.46-13.46 c-11.498-11.497-26.78-17.829-43.031-17.829c-15.504,0-30.115,5.77-41.413,16.277c-3.843-0.565-7.725-0.886-11.612-0.953 c1.149-1.335,2.341-2.639,3.597-3.894c13.201-13.205,30.753-20.478,49.424-20.478c18.672,0,36.227,7.273,49.433,20.479 c1.876,1.876,4.42,2.929,7.073,2.929c2.652,0,5.196-1.055,7.071-2.931c13.197-13.206,30.751-20.479,49.427-20.479 c18.669,0,36.219,7.273,49.421,20.484c13.206,13.197,20.479,30.75,20.479,49.427C440.38,181.893,433.106,199.447,419.898,212.654z"></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    New Matches
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    200 +
                  </p>
                </div>
              </div>

              <div className="flex items-center p-2 bg-white rounded-lg shadow-md ">
                <div className="p-3 mr-4 bg-gradient-to-r from-pink-700 to-blue-400 rounded-full dark:text-blue-100 dark:bg-blue-500 shadow-lg">
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M20 18L14 18M17 15V21M4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z"
                        stroke="#ffffff"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    New Users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">
                    500 +
                  </p>
                </div>
              </div>

              <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
                <div className="p-3 mr-4 bg-gradient-to-r from-purple-700 to-blue-500 rounded-full shadow-lg">
                  <svg
                    width="48px"
                    height="48px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#CCCCCC"
                      stroke-width="0.192"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10.5 21H5.6C5.03995 21 4.75992 21 4.54601 20.891C4.35785 20.7951 4.20487 20.6422 4.10899 20.454C4 20.2401 4 19.9601 4 19.4V17.6841C4 17.0485 4 16.7306 4.04798 16.4656C4.27087 15.2344 5.23442 14.2709 6.46558 14.048C6.5425 14.0341 6.6237 14.0242 6.71575 14.0172C6.94079 14 7.05331 13.9914 7.20361 14.0026C7.35983 14.0143 7.4472 14.0297 7.59797 14.0722C7.74302 14.1131 8.00429 14.2315 8.52682 14.4682C8.83795 14.6091 9.16326 14.7243 9.5 14.811M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM16.4976 16.2119C15.7978 15.4328 14.6309 15.2232 13.7541 15.9367C12.8774 16.6501 12.7539 17.843 13.4425 18.6868C13.8312 19.1632 14.7548 19.9983 15.4854 20.6353C15.8319 20.9374 16.0051 21.0885 16.2147 21.1503C16.3934 21.203 16.6018 21.203 16.7805 21.1503C16.9901 21.0885 17.1633 20.9374 17.5098 20.6353C18.2404 19.9983 19.164 19.1632 19.5527 18.6868C20.2413 17.843 20.1329 16.6426 19.2411 15.9367C18.3492 15.2307 17.1974 15.4328 16.4976 16.2119Z"
                        stroke="#ffffff"
                        stroke-width="2.4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 ">
                    Active users
                  </p>
                  <p className="text-lg font-semibold text-gray-700 ">500+</p>
                </div>
              </div>
            </div>
            <div className="w-full grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 items-center">
              <div className="p-1 rounded-md shadow-xl bg-white">
                <SimpleBarChart titleText="" />
              </div>
              <div className="p-1 rounded-md shadow-xl bg-white">
                <SimpleLineChart titleText="" />
              </div>
              <div className="p-1 rounded-md shadow-xl bg-white">
                <SimplePiechart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Home