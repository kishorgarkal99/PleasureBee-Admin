import { FaPlus } from "react-icons/fa"
import { MdOutlineEditNote, MdTitle } from "react-icons/md"
import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import Modal from "../components/Modal"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import Loader from "../components/Loader"

// interface UI{
//     id:string,
//     title:string,
//     content:string[]
// }
const UserRegFlow = () => {
    const [edit, setEdit] = useState(false)
    const [uIs, setUIs] = useState([{
        id: "",
        title: "",
        content: [""] || [{}]
    }])

    const getUIs = async () => {
        await getDocs(collection(db, "UI"))
            .then((querySnapshot) => {
                try {
                    console.log(querySnapshot.docs.at(4)?.data())
                    const newData = querySnapshot.docs
                        .map((doc) => ({
                            id: doc.id,
                            title: doc.data().title,
                            content: doc.data().content,
                        }));
                    setUIs(newData)
                } catch (error) {
                    console.error(error)
                }
            })
    }
    useEffect(() => {
        getUIs()
    }, [])
    // console.log(uIs)
    return (
        <Layout title="PleasureBee/User Resgistration Flow">
            {uIs.length === 0 ?
                <div className="w-full bg-gray-100 h-4/5 flex items-center justify-center">
                    <Loader openloader={true} />
                </div>
                : <>
                    <div className="min-h-screen rounded-lg bg-gray-100">
                        <div className="mx-auto max-w-7xl">
                            <div className="fixed right-4 bottom-16 flex justify-between">
                                <button
                                    onClick={() => setEdit(true)}
                                    className="flex justify-center items-center px-4 py-4 bg-white text-md  text-pink-700 outline-0 transition-colors duration-200 bg-pink-700 border-2 border-pink-300 rounded-full hover:bg-gradient-to-r from-pink-700 to-blue-400 hover:text-white hover:border-0 shadow-xl">
                                    <FaPlus className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:px-8 ">
                                {uIs.map((ui, index) => (
                                    <div key={index} className="col-span-1 min-h-full bg-white shadow-xl rounded-xl ">
                                        <div className="flex items-center gap-x-6 p-5">
                                            {/* {
                                        screen.bgImg.length > 0 && <img
                                            className="h-16 w-16 rounded-full"
                                            src={screen.bgImg}
                                            alt=""
                                        />
                                    } */}
                                            <div className="w-full select-none">
                                                <div className="flex justify-between">
                                                    <div className="flex items-center mb-2">
                                                        <MdTitle className="text-gray-400 text-xl shadow-xl font-bold mr-2" />
                                                        <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-600">
                                                            {ui?.title}
                                                        </h3>
                                                    </div>

                                                    <div>
                                                        <button
                                                            onClick={() => setEdit(true)}
                                                            className="text-xl shadow-xl font-bold text-pink-700 px-4 bg-transparent border border-pink-600 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:border-transparent focus:outline-none" >
                                                            <h1>
                                                                <MdOutlineEditNote />
                                                            </h1>
                                                        </button>
                                                    </div>
                                                </div>
                                                {/* {
                                                    ui.description?.length > 0 && <div className="flex items-center ml-2">
                                                        <FaInfoCircle className="text-gray-400 text-base shadow-xl font-bold mr-2" />
                                                        <p className="text-sm font-semibold leading-6 text-gray-500">
                                                            {ui.description}
                                                        </p>
                                                    </div>
                                                } */}
                                                <hr />
                                                <h3 className="mt-1 text-base font-semibold leading-7 tracking-tight text-gray-500">
                                                    Options
                                                </h3>
                                                <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                    {
                                                        ui.content?.map((option, index: number) => (
                                                            <>
                                                                {
                                                                    typeof option === "string"
                                                                        ? <span key={index} className="flex items-center px-4 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">

                                                                            <p className="text-sm font-semibold">
                                                                                {option}
                                                                            </p>
                                                                        </span>
                                                                        : <span key={index} className="flex items-center">
                                                                            <p className="text-gray-400 text-base font-bold mr-2">
                                                                                {option?.title?.toString()}
                                                                            </p>
                                                                            <span>
                                                                                {option?.options?.toString().split(",").map((opt:string) =>
                                                                                    <span className="text-sm font-semibold px-2 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                                                                                        {opt}
                                                                                    </span>
                                                                                )}
                                                                            </span>
                                                                        </span>
                                                                }

                                                            </>
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
                    <Modal open={edit} setOpen={setEdit} data={uIs[0]} />
                </>
            }
        </Layout>
    )
}

export default UserRegFlow