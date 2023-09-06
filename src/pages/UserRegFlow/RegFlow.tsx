import { FaInfoCircle, FaPlus } from "react-icons/fa"
import { MdOutlineEditNote, MdTitle } from "react-icons/md"
import Layout from "../../components/Layout"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../config/firebase"
import Loader from "../../components/Loader"
import RegFlowModal from "./components/RegFlowModal"
import Interests from "./components/Interest/InterestOptions"
import Modes from "./components/ModeOptions"
import IntrestModal from "./components/Interest/InterestModal"

interface UI {
    id: string,
    title: string,
    description?: string,
    showOrientation?: boolean
    content: string[] | []
    contentVisible?: boolean[]
}

const UserRegFlow = () => {

    const [uIs, setUIs] = useState<UI[]>([])
    const [ui, setUI] = useState<UI>({
        id: "",
        title: "",
        description: "",
        showOrientation: true,
        content: [],
        contentVisible: []
    })

    const [dataIndex, setIndex] = useState<number>()
    const [dataId, setId] = useState<string>("")
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = (i: number) => {
        setIndex(i)
    }
    const handleCloseModal = () => {
        setShowModal(false)
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
                            showOrientation: doc.data()?.showOrientation,
                            contentVisible: doc.data()?.contentVisible
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

    useEffect(() => {
        if (dataIndex !== undefined) {
            uIs[dataIndex].id === "intrestScreen" ? setId("intrestScreen") : setUI(uIs[dataIndex])
            setShowModal(true)
        }
    }, [dataIndex])

    return (
        <Layout title="PleasureBee/User Resgistration Flow">
            {uIs.length === 0 ?
                <div className="w-full bg-gray-100 h-full flex items-center justify-center">
                    <Loader openloader={true} />
                </div>
                :
                <>
                    <IntrestModal UIid={dataId} showModal={showModal} setShowModal={setShowModal} closeModal={handleCloseModal} />
                    {/* <RegFlowModal ui={ui} showModal={showModal} setShowModal={setShowModal} closeModal={handleCloseModal} /> */}
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
                                                            onClick={() => handleOpenModal(index)}
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
                                                {
                                                    ui?.id.toString().trim() === "genderScreen" && <div className="p-2">
                                                        <span className="text-gray-500 text-base mr-2">
                                                            show orientation:
                                                        </span>
                                                        <span className="text-sm font-semibold px-2 bg-gray-200 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                                                            {ui.showOrientation?.toString()}
                                                        </span>
                                                    </div>
                                                }
                                                <h3 className="mt-1 text-base font-semibold leading-7 tracking-tight text-gray-500">
                                                    Options
                                                </h3>
                                                <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                    {
                                                        ui.content?.map((option, index) => (
                                                            <span key={index}>
                                                                {typeof option === "string"
                                                                    ? <>
                                                                        <span className="flex items-center px-4 bg-gray-200 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">

                                                                            <span className="text-sm font-semibold">

                                                                                {ui.id.toString().trim() === "test"
                                                                                    ? <>
                                                                                        option: {option},
                                                                                    </>
                                                                                    : <>
                                                                                        {option}
                                                                                    </>
                                                                                }
                                                                            </span>
                                                                            {
                                                                                ui?.id.toString().trim() === "test"
                                                                                && <span className="pl-2">
                                                                                    {"visible: "}{ui.contentVisible?.at(index)?.toString()}
                                                                                </span>
                                                                            }
                                                                        </span>

                                                                    </>
                                                                    : ui?.id.toString().trim() === "mode" ?
                                                                        <Modes mode={option} />
                                                                        : ui?.id.toString().trim() === "intrestScreen" ?
                                                                            <Interests interest={option} />
                                                                            : ""
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