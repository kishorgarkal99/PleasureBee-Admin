import { FaInfoCircle, FaMinus, FaPlus, FaRegEdit } from "react-icons/fa"
import { MdOutlineEditNote, MdTitle } from "react-icons/md"
import Layout from "../components/Layout"
import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import Loader from "../components/Loader"

// interface UI{
//     id:string,
//     title:string,
//     content:string[]
// }

const UserRegFlow = () => {

    const [uIs, setUIs] = useState([{
        id: "",
        title: "",
        content: [""] || [{}],
        description: "",
    }])

    const [dataId, setDataId] = useState<string>("")
    const [showModal, setShowModal] = useState(false);
    const [dataToEdit, setDataToEdit] = useState({
        id: "",
        title: "",
        content: [""] || [{}],
        description: "",
    });
    const [inputValue, setInputValue] = useState("");
    const [contentList, setList] = useState<string[]>([]);

    const [errorMessage, setErrorMessage] = useState("")
    const [newTitle, setTitle] = useState("")
    const [description, setDesc] = useState("")
    const [content, setContent] = useState<string[]>([])
    // const [contentVissible, setContentVissible] = useState([])
    const [showOrientation, setShowOrientation] = useState<boolean>(true)


    const handleAddItem = () => {

        if (inputValue === "") {
            setErrorMessage("Please enter a value");
        } else if (contentList.includes(inputValue)) {
            setErrorMessage("This value already exists in the list");
        } else {
            setList([...contentList, inputValue]);
            setInputValue('');
            setErrorMessage('');
        }
    };

    const handleDeleteItem = (optn: string) => {
        const updatedList = contentList.filter((item) => item !== optn);
        setList(updatedList)
        console.log(contentList)
    }

    const handleOpenModal = (id: string) => {
        setDataId(id)
        const dataTobeEdited = uIs.filter((ui) => ui.id === id)[0]
        setDataToEdit(dataTobeEdited)

        setShowModal(true)

    }

    const handleSubmit = () => {
        //screens without description
        if ((
            dataId.trim() === "drinkScreen")
            || (dataId.trim() === "educationScreen")
            || (dataId.trim() === "haveChildrenScreen")
            || (dataId.trim() === "politicalScreen")
            || (dataId.trim() === "religion")
            || (dataId.trim() === "smokeScreen")
            || (dataId.trim() === "workout")
            || (dataId.trim() === "zodiacSign")
        ) {
            setContent([...contentList])
            if (newTitle?.length < 3) {
                setTitle(dataToEdit.title)
            }
            const ui = {
                id: dataId,
                title: newTitle,
                content: content
            }

            console.log(ui)
        }
        // screens with description
        else if (
            (dataId.trim() === "genderScreen")
            || (dataId.trim() === "liketoDate")
            || (dataId.trim() === "profilePrompt")
            || (dataId.trim() === "toFind")
        ) {
            setContent([...contentList])
            if (newTitle?.length < 3) {
                setTitle(dataToEdit.title)
            }
            if (description?.length < 3) {
                setTitle(dataToEdit.description)
            }
            if ((dataId.trim() === "genderScreen")) {
                const ui = {
                    id: dataId,
                    title: newTitle,
                    content: content,
                    showOrientation: showOrientation,
                    description: description
                }
                console.log(ui)
            } else {
                const ui = {
                    id: dataId,
                    title: newTitle,
                    content: content,
                    description: description
                }
                console.log(ui)
            }


        } else if ((dataId.trim() === "intrestScreen")) {
            // 
        }


        handleCloseModal()

    }

    const handleCloseModal = () => {
        setShowModal(false)
        setDataToEdit({
            id: "",
            title: "",
            content: [""] || [{}],
            description: "",
        })
        setList([])
    }

    const getUIs = async () => {
        await getDocs(collection(db, "UI"))
            .then((querySnapshot) => {
                try {
                    const newData = querySnapshot.docs
                        .map((doc) => ({
                            id: doc.id,
                            title: doc.data().title,
                            content: doc.data().content,
                            description: doc.data().description,
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
        showModal ? setList([...dataToEdit.content]) : setList([])
    }, [showModal, dataToEdit.content])


    return (
        <Layout title="PleasureBee/User Resgistration Flow">
            {uIs.length === 0 ?
                <div className="w-full bg-gray-100 h-4/5 flex items-center justify-center">
                    <Loader openloader={true} />
                </div>
                :
                <>
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
                                {uIs.map((ui) => (
                                    <div key={ui.id} className="col-span-1 min-h-full bg-white shadow-xl rounded-xl ">
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
                                                            onClick={() => handleOpenModal(ui.id)}
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
                                                        ui.content?.map((option, index: number) => (
                                                            <span key={index}>
                                                                {
                                                                    typeof option === "string"
                                                                        ? <span className="flex items-center px-4 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">

                                                                            <p className="text-sm font-semibold">
                                                                                {option}
                                                                            </p>
                                                                        </span>
                                                                        : <span key={index} className="flex items-center">
                                                                            <p className="text-gray-400 text-base font-bold mr-2">
                                                                                {option?.title?.toString()}
                                                                            </p>
                                                                            <span>
                                                                                {option?.options?.toString().split(",").map((opt: string) =>
                                                                                    <span className="text-sm font-semibold px-2 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                                                                                        {opt}
                                                                                    </span>
                                                                                )}
                                                                            </span>
                                                                        </span>
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
                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                            <FaRegEdit className="h-6 w-6 text-pink-700 mr-2" aria-hidden="true" />
                                            <input
                                                type="text"
                                                name="option"
                                                id="option"
                                                autoComplete="option"
                                                defaultValue={dataToEdit.title || ""}
                                                onChange={e => setTitle(e.target.value)}
                                                className="w-full border-b-1 border-pink-700 p-2 font-semibold text-gray-600 shadow-sm text-xl rounded-md focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0" />
                                        </div>
                                        {/*body*/}

                                        <div className="relative p-6 flex-auto">
                                            <div className="mt-2">
                                                <div>
                                                    <div className="space-y-6">
                                                        <div className="col-span-full">
                                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                                description
                                                            </label>
                                                            <div className="mt-2">
                                                                <textarea
                                                                    id="about"
                                                                    name="about"
                                                                    rows={3}
                                                                    placeholder={"write screen description"}
                                                                    onChange={e => setDesc(e.target.value)}
                                                                    className="block w-full p-2 rounded-md border-0 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 sm:text-md sm:leading-6"
                                                                    defaultValue={dataToEdit.description || ""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                            {
                                                                contentList.map((option: string, index: number) => (
                                                                    <span key={index} className="flex items-center pl-4 bg-gray-200 text-gray-700 rounded-full">

                                                                        <p className="text-sm text-ellipsis">
                                                                            {option}
                                                                        </p>
                                                                        <button onClick={() => handleDeleteItem(option)}
                                                                            className="font-bold ml-2 text-red-500 bg-gray-100 p-1 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:scale-105">
                                                                            <FaMinus />
                                                                        </button>
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-full">
                                                    <div>
                                                        <label htmlFor="option" className="block text-sm text-gray-900">
                                                            Option
                                                        </label>

                                                        {errorMessage && <p className="text-sm overflow-elipsis text-red-500">{errorMessage}
                                                        </p>}
                                                        <div className="mt-2 grid grid-cols-12 items-center min-w-full">
                                                            <input
                                                                type="text"
                                                                name="option"
                                                                id="option"
                                                                autoComplete="option"
                                                                value={inputValue}
                                                                onChange={e => setInputValue(e.target.value)}
                                                                className="col-span-10 rounded-md border-0 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 text-md sm:leading-6" />
                                                            <div className="ml-2 col-span-2">
                                                                <button
                                                                    onClick={handleAddItem}
                                                                    className="rounded-full p-3 text-white bg-pink-700 hover:bg-pink-500">
                                                                    <FaPlus className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                type="button"
                                                onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                            <button
                                                className="inline-flex w-full justify-center rounded-lg bg-pink-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
                                                type="button"
                                                onClick={handleSubmit}
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                </>
            }
        </Layout>
    )
}

export default UserRegFlow