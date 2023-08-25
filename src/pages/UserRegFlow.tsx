import { FaInfoCircle } from "react-icons/fa"
import { MdOutlineEditNote, MdTitle } from "react-icons/md"
import Layout from "../components/Layout"
import { screens } from "../data/screens"
import { useState } from "react"

const UserRegFlow = () => {
    const [edit, setEdit] = useState(false)
    return (
        <Layout title="PleasureBee/User Resgistration Flow">
            <div className="p-4 lg:px-8 bg-gray-100 min-h-screen rounded-lg dark:border-gray-700">
                <div className="min-h-full sm:py-10">
                    <div className="mx-auto max-w-7xl min-h-full">
                        <div className="min-h-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {screens.map((screen, index) => (
                                <div key={index} className="col-span-1 min-h-full bg-white shadow-xl rounded-xl ">
                                    <div className="flex items-center gap-x-6 p-5">
                                        {
                                            screen.bgImg.length > 0 && <img
                                                className="h-16 w-16 rounded-full"
                                                src={screen.bgImg}
                                                alt=""
                                            />
                                        }
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <div className="flex items-center mb-2">
                                                    <MdTitle className="text-gray-400 text-xl shadow-xl font-bold mr-2" />
                                                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-600">
                                                        {screen.screenTitle}
                                                    </h3>
                                                </div>

                                                <div>
                                                    <button 
                                                    onClick={()=>setEdit(true)}
                                                    className="text-xl shadow-xl font-bold text-pink-700 px-4 bg-transparent border border-pink-600 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:border-transparent focus:outline-none" >
                                                        <h1>
                                                            <MdOutlineEditNote />
                                                        </h1>
                                                    </button>
                                                </div>
                                            </div>
                                            {
                                                screen.description.length > 0 && <div className="flex items-center ml-2">
                                                    <FaInfoCircle className="text-gray-400 text-base shadow-xl font-bold mr-2" />
                                                    <p className="text-sm font-semibold leading-6 text-gray-500">
                                                        {screen.description}
                                                    </p>
                                                </div>
                                            }
                                            <hr />
                                            <h3 className="mt-1 text-base font-semibold leading-7 tracking-tight text-gray-500">
                                                Options
                                            </h3>
                                            <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                {
                                                    screen.options.map((option, index) => (
                                                        <span key={index} className="flex items-center px-4 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                                                            {/* <h1 className="text-gray-400 text-base shadow-xl font-bold mr-2">
                                                                {index + 1}
                                                            </h1> */}
                                                            <p className="text-sm font-semibold">
                                                                {option}
                                                            </p>
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserRegFlow