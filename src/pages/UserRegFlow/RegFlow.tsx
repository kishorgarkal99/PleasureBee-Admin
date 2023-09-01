import { FaInfoCircle, FaPlus } from "react-icons/fa"
import { MdOutlineEditNote, MdTitle } from "react-icons/md"
import Layout from "../../components/Layout"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/firebase"
import Loader from "../../components/Loader"
import RegFlowModal from "./RegFlowModal"
import Interests from "./components/Interests"

interface UI {
    id: string,
    title: string,
    description: string,
    content: []
}

const UserRegFlow = () => {

    const [uIs, setUIs] = useState<UI[]>([{
        id: "",
        title: "",
        content: [],
        description: "",
    }])

    const [showModal, setShowModal] = useState(false);
    const [dataToEdit, setDataToEdit] = useState<UI>({
        id: "",
        title: "",
        content: [] || [{}],
        description: "",
    });


    const handleModalState = (i: number) => {
        // const dataTobeEdited = uIs.filter((ui) => ui.id === id)[0]
        setDataToEdit(uIs[i])
        console.log(dataToEdit)
        setShowModal(!showModal)
    }



    const getUIs = async () => {
        await getDocs(collection(db, "UI"))
            .then((querySnapshot) => {
                try {
                    const newData = querySnapshot.docs
                        .map((doc) => ({
                            id: doc.id.toString(),
                            title: doc.data().title.toString(),
                            description: doc.data().description?.toString(),
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

    useEffect(() => {
        getUIs()
    }, [showModal])

    return (
        <Layout title="PleasureBee/User Resgistration Flow">
            {uIs.length === 0 ?
                <div className="w-full bg-gray-100 h-4/5 flex items-center justify-center">
                    <Loader openloader={true} />
                </div>
                :
                <>
                    <RegFlowModal ui={dataToEdit} showModal={showModal} setShowModal={setShowModal} />
                    <div className="min-h-screen rounded-lg bg-gray-100">
                        <div className="mx-auto max-w-7xl">
                            <div className="fixed right-4 bottom-16 flex justify-between">
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="flex justify-center items-center px-4 py-4 bg-white text-md  text-pink-700 outline-0 transition-colors duration-200 bg-pink-700 border-2 border-pink-300 rounded-full hover:bg-gradient-to-r from-pink-700 to-blue-400 hover:text-white hover:border-0 shadow-xl">
                                    <FaPlus className="w-6 h-6" />
                                </button>
                            </div>
                            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 lg:px-8 ">
                                {uIs.map((ui, index) => (
                                    <div key={index} className="col-span-1 min-h-full bg-white shadow-xl rounded-xl ">
                                        <div className="flex items-center gap-x-6 p-5">
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
                                                            onClick={() => handleModalState(index)}
                                                            className="text-xl shadow-xl font-bold text-pink-700 px-4 bg-transparent border border-pink-600 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:border-transparent focus:outline-none" >
                                                            <h1>
                                                                <MdOutlineEditNote />
                                                            </h1>
                                                        </button>
                                                    </div>
                                                </div>
                                                {
                                                    ui?.description && <div className="flex items-center ml-2">
                                                        <FaInfoCircle className="text-gray-400 text-base shadow-xl font-bold mr-2" />
                                                        <p className="text-sm font-semibold leading-6 text-gray-500">
                                                            {ui.description}
                                                        </p>
                                                    </div>
                                                }
                                                <hr />
                                                <h3 className="mt-1 text-base font-semibold leading-7 tracking-tight text-gray-500">
                                                    Options
                                                </h3>
                                                <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                    {
                                                        ui.content?.map((option, index) => (
                                                            <span key={index}>
                                                                {typeof option === "string"
                                                                    ? <span className="flex items-center px-4 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">

                                                                        <p className="text-sm font-semibold">
                                                                            {option}
                                                                        </p>
                                                                    </span>
                                                                    :
                                                                    <Interests interest={option} />
                                                                    // <span key={index} className="flex items-center">
                                                                    //     <p className="text-gray-400 text-base font-bold mr-2">
                                                                    //         {option?.title?.toString()}
                                                                    //     </p>
                                                                    //     <span>
                                                                    //         {option?.options?.toString().split(",").map((opt: string) =>
                                                                    //             <span className="text-sm font-semibold px-2 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                                                                    //                 {opt}
                                                                    //             </span>
                                                                    //         )}
                                                                    //     </span>
                                                                    // </span>
                                                                }

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

                </>
            }
        </Layout>
    )
}

export default UserRegFlow