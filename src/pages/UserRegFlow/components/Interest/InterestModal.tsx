import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../../config/firebase"
import { FaMinus, FaPlus, FaRegEdit } from "react-icons/fa"

interface Options {
    [key: string]: string
}
interface UI {
    id: string,
    title: string,
    description: string,
    content: { title: string, options: Options }[]
}

type IntrestModalProp = {
    UIid: string,
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal: () => void,
}

const IntrestModal = ({ UIid, showModal }: IntrestModalProp) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [inputValue, setInputValue] = useState("");
    const [_, setCategory] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const [ui, setUI] = useState<UI>({
        id: "",
        title: "",
        description: "",
        content: [],
    })

    const handleAddItem = () => {

        if (inputValue === "") {
            setErrorMessage("Please enter a value");
        } else {
            // setUI(prevState => ({ ...prevState, content: [...prevState.content, inputValue], }));
            setInputValue("");
            setErrorMessage("");
        }
    }


    const handleDeleteItem = (key: string, index: number) => {
        const updatedContent = [...ui.content]
        if (Object.prototype.hasOwnProperty.call(updatedContent[index].options, key)) {
            delete updatedContent[index].options[key];
        }
        console.log(updatedContent[index])
        setUI(prevState => ({ ...prevState, content: updatedContent, }));
    }
    useEffect(() => {
        const getUiById = async () => {
            await getDoc(doc(db, "UI", UIid)).then((querySnapshot) => {
                try {
                    setUI({
                        id: querySnapshot.id,
                        title: querySnapshot.data()?.title,
                        description: querySnapshot.data()?.description,
                        content: querySnapshot.data()?.content
                    })
                    setLoading(false)
                } catch (error) {
                    console.error(error)
                }
            })
        }
        getUiById()
    }, [UIid])

    return (
        <div>
            {showModal ? (
                <>
                    <div
                        className="w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none rounded-md focus:outline-none">
                        <div className="relative w-auto my-2 mx-auto max-w-6xl">
                            {/*content*/}
                            {!loading && <div className="bg-white py-2 px-8">
                                <div className="mx-auto max-w-xl">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <div className="sm:col-span-2 flex items-center justify-start p-5 border-b border-solid border-slate-200">
                                            <FaRegEdit className="h-6 w-6 text-pink-700 mr-2" aria-hidden="true" />
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    defaultValue={ui?.title || ""}
                                                    className="rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="mt-2.5 sm:col-span-2">
                                            <textarea
                                                name="description"
                                                rows={4}
                                                defaultValue={ui?.description || ""}
                                                placeholder="write a screen desctription here ..."
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-0 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6" />
                                        </div>

                                        <div className="mt-2.5 sm:col-span-2 flex gap-2">
                                            {
                                                ui.content.map((ctnt, index) => (<span>
                                                    <span key={index} className="text-gray-500 text-base mr-2">
                                                        {ctnt?.title}{" :"}
                                                    </span>
                                                    {Array.from(new Map<string, string>(Object.entries(ctnt.options)).entries()).map((opt, i) =>
                                                        <span className="flex items-center pl-4 bg-gray-200 text-gray-700 rounded-full max-w-fit mb-2">
                                                            <span key={i} >
                                                                <img className="w-3 h-3 inline mr-1" src={opt[1]} alt="" />
                                                                {opt[0]}
                                                            </span>
                                                            <button
                                                                onClick={() => handleDeleteItem(opt[0], index)}
                                                                className="font-bold ml-2 text-red-500 bg-gray-100 p-1 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:scale-105">
                                                                <FaMinus />
                                                            </button>
                                                        </span>
                                                    )}
                                                </span >
                                                ))
                                            }
                                        </div>

                                        {errorMessage &&
                                            <p className="block text-sm overflow-elipsis text-red-500">
                                                {errorMessage}
                                            </p>
                                        }
                                        <div className="sm:col-span-2 flex items-center gap-2">
                                            <div className="relative mt-0">
                                                <div className="absolute inset-y-0 left-0 flex items-center">
                                                    <select
                                                        name="category"
                                                        onChange={e=>setCategory(e.target.value)}
                                                        className=" h-full rounded-md border-0 bg-transparent bg-none py-0 px-1 text-gray-600 overflow-elipsis outline-0 focus:outline-0 focus:ring-pink-700 sm:text-sm">
                                                        <option>Creativity</option>
                                                        <option>Sports</option>
                                                    </select>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="option"
                                                    onChange={e => setInputValue(e.target.value)}
                                                    placeholder="write option here ..."
                                                    className="w-full rounded-md border-0 pr-2 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6" />
                                            </div>
                                            <button
                                                onClick={handleAddItem}
                                                className="rounded-full p-3 text-white bg-pink-700 hover:bg-pink-500">
                                                <FaPlus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex items-center justify-between">
                                        <div />
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="block w-full rounded-md bg-transparent px-8 py-2 text-center font-semibold shadow-sm border-2 border-gray-200 hover:bg-pink-500 hover:text-white focus-visible:outline focus-visible:outline-2 hover:border-0 focus-visible:outline-offset-2 focus-visible:outline-pink-700">
                                                Close
                                            </button>
                                            <button
                                                className="block w-full rounded-md bg-pink-700 px-8 py-2 text-center font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </div>
    );
}


export default IntrestModal