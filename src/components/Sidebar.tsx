import { NavLink } from "react-router-dom"

// type SideBarProp = {
//     menuItems: [{
//         title: string,
//         icon: string
//     }]
// }

const Sidebar = () => {
    return (
        <div>
            <div className="bottom-0 min-h-screen ">
                <aside className="shadow-xl min-h-screen rounded-lg dark:border-gray-700 z-20 md:w-64 overflow-y-auto bg-white flex-shrink-0">
                    <div className="py-4 text-gray-700 ">
                        <div className="px-6 mb-2">
                            <NavLink
                                to="/"
                                className="flex items-center transition duration-200 transform hover:scale-110"
                            >
                                <img
                                    src={"logo"}
                                    alt="pleasurebee logo"
                                    className="rounded-full w-12 h-12 shadow-md border-4 border-white"
                                />
                                <h1 className="hidden md:block ml-2 font-bold">PleasureBee</h1>
                            </NavLink>
                        </div>
                        <hr />
                        <ul className="mt-4">
                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 "
                                    to="/"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        aria-hidden="true"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="#c00000"
                                    >
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                    <span className="ml-4 hidden md:block">Dashboard</span>
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                    to="/"
                                >
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c00000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 15C21.2091 15 23 16.7909 23 19V21H21M16 10.874C17.7252 10.4299 19 8.86383 19 6.99999C19 5.13615 17.7252 3.57005 16 3.12601M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM5 15H13C15.2091 15 17 16.7909 17 19V21H1V19C1 16.7909 2.79086 15 5 15Z" stroke="#c00000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                    <span className="ml-4 hidden md:block">Users</span>
                                </NavLink>
                            </li>
                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                    to="/"
                                >
                                    <svg fill="#c00000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393.689 393.689" stroke="#c00000" stroke-width="8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M98.44,65.665c-21.569,4.057-41.124,18.68-52.308,39.121c-13.195,24.115-13.986,53.441-2.227,82.578 c1.18,2.92,3.989,4.693,6.958,4.693c0.934,0,1.885-0.176,2.805-0.547c3.841-1.551,5.697-5.92,4.147-9.762 c-10.046-24.889-9.522-49.666,1.475-69.764c9.051-16.539,24.722-28.344,41.921-31.578c4.071-0.766,6.75-4.686,5.985-8.756 C106.431,67.58,102.503,64.906,98.44,65.665z"></path> <path d="M199.872,154.537c-14.331,2.693-27.308,12.383-34.715,25.918c-8.678,15.859-9.223,35.084-1.534,54.133 c1.18,2.922,3.989,4.695,6.958,4.695c0.934,0,1.885-0.176,2.805-0.547c3.841-1.551,5.697-5.922,4.147-9.764 c-5.975-14.801-5.697-29.475,0.783-41.318c5.271-9.633,14.366-16.504,24.327-18.375c4.07-0.766,6.75-4.686,5.985-8.758 C207.863,156.451,203.945,153.775,199.872,154.537z"></path> <path d="M391.033,183.146c-2.305-9.279-6.173-18.061-11.308-25.926c2.767-28.158-3.128-54.959-17.168-77.668 c-13.43-21.723-33.532-38.142-56.603-46.234c-33.93-11.904-81.103-6.826-115.746,40.682c-12.67-17.369-27.769-30.08-44.999-37.859 C126.8,27.83,106.585,25.662,86.74,29.872C42.318,39.298,7.958,77.935,1.237,126.015c-5.223,37.363,6.155,77.346,32.904,115.625 c30.051,43.002,80.049,85.016,152.559,123.398c1.098,0.58,2.303,0.871,3.509,0.871c1.206,0,2.411-0.291,3.509-0.871 c11.896-6.299,23.398-12.816,34.263-19.408c8.59,5.314,17.683,10.516,27.278,15.596c1.098,0.58,2.303,0.871,3.509,0.871 c1.206,0,2.411-0.291,3.509-0.871c51.954-27.502,89.259-58.549,110.877-92.275C396.498,232.529,395.762,202.187,391.033,183.146z M258.767,346.093C130.133,276.699,136.1,206.703,141.053,186.763c7.194-28.969,32.176-49.996,59.399-49.996 c20.316,0,38.766,11.656,51.949,32.822c1.369,2.199,3.776,3.535,6.366,3.535c2.59,0,4.997-1.336,6.366-3.535 c13.184-21.166,31.633-32.822,51.95-32.822c27.22,0,52.197,21.025,59.392,49.994C381.428,206.703,387.397,276.703,258.767,346.093 z M190.209,349.912C124.278,314.544,75.922,275.24,46.437,233.048c-24.541-35.119-35.033-71.412-30.345-104.957 c5.85-41.85,35.492-75.424,73.762-83.545c36.383-7.719,70.641,9.35,93.988,46.832c1.369,2.199,3.776,3.535,6.366,3.535 c2.59,0,4.997-1.336,6.366-3.535c25.777-41.385,64.811-57.797,104.414-43.906c31.749,11.137,63.12,44.365,64.377,93.102 c-0.689-0.606-1.382-1.207-2.091-1.789c-13.391-10.973-29.795-17.018-46.191-17.018c-22.458,0-42.839,10.828-58.316,30.74 c-15.478-19.912-35.858-30.74-58.316-30.74c-16.398,0-32.805,6.045-46.197,17.018c-13.556,11.109-23.414,26.863-27.76,44.363 c-4.729,19.039-5.465,49.381,17.881,85.801c15.379,23.992,38.702,46.623,69.581,67.592 C206.304,341.06,198.363,345.535,190.209,349.912z"></path> </g> </g> </g></svg>
                                    <span className="ml-4 hidden md:block">Matches</span>
                                </NavLink>
                            </li>
                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                    to="/"
                                >
                                    <svg width="24px" height="24px" viewBox="-1 0 24 24" id="meteor-icon-kit__solid-analytics" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c00000" stroke-width="1.44"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 13C4.65685 13 6 14.3431 6 16V21C6 22.6569 4.65685 24 3 24C1.34315 24 0 22.6569 0 21V16C0 14.3431 1.34315 13 3 13zM11 0C12.6569 0 14 1.34315 14 3V21C14 22.6569 12.6569 24 11 24C9.3431 24 8 22.6569 8 21V3C8 1.34315 9.3431 0 11 0zM19 7C20.6569 7 22 8.34315 22 10V21C22 22.6569 20.6569 24 19 24C17.3431 24 16 22.6569 16 21V10C16 8.34315 17.3431 7 19 7z" fill=""></path></g></svg>
                                    <span className="ml-4 hidden md:block">Analytics</span>
                                </NavLink>
                            </li>

                            <hr className="m-2 bg-pink-700" />

                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                    to=""
                                >
                                    <svg width="24px" height="24px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#c00000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#c00000" stroke-width="2.4"></circle> <path opacity="0.5" d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#c00000" stroke-width="2.4"></path> </g></svg>
                                    <span className="ml-4 hidden md:block">Settings</span>
                                </NavLink>
                            </li>

                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                    to=""
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="#c00000"
                                        stroke="#c00000"
                                    >
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                    </svg>
                                    <span className="ml-4 hidden md:block">Get help</span>
                                </NavLink>
                            </li>
                            <li className="relative px-6 py-3">
                                <NavLink
                                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
                                    to="/"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="#c00000"
                                        stroke="#c00000">
                                        <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z" /></svg>

                                    <span className="ml-4 hidden md:block">Fedback</span>
                                </NavLink>
                            </li>
                        </ul>
                        <button
                            className="px-6 my-6 md:hidden text-red-600"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="#c00000"
                                stroke="#c00000"
                            >
                                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                            </svg>
                        </button>
                        <div className="hidden md:block px-6 my-6">
                            <button
                                className="flex items-center justify-center w-full px-4 py-2 leading-5 text-white transition-colors duration-150 bg-pink-700 border border-transparent rounded-lg active:bg-pink-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
            {/* {
                menuItems?.map((menu) => (<div>
                    <img src={menu.icon} />
                    <span>{menu.title}</span>
                </div>))
            } */}
        </div>
    )
}

export default Sidebar