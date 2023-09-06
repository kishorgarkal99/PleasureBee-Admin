import { doc, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { FaMinus, FaPlus, FaRegEdit } from "react-icons/fa"
import { db } from "../../../config/firebase"
import Loader from "../../../components/Loader"
import { Switch } from "@headlessui/react"

interface UI {
    id: string,
    title: string,
    description?: string,
    showOrientation?: boolean,
    content: string[],
    contentVisible?: boolean[]
}

type RegFlowModalProp = {
    ui: UI,
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal: () => void,
}

const RegFlowModal = ({ ui, showModal, setShowModal }: RegFlowModalProp) => {

    const [inputValue, setInputValue] = useState("");
    const [agreed, setAgreed] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState<boolean>(false)

    const [newUI, setUI] = useState<UI>({
        id: "",
        title: "",
        description: "",
        showOrientation: true,
        content: [],
        contentVisible: []
    })


    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUI(prevState => ({ ...prevState, title: e.target.value, }))
    }

    const onDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUI(prevState => ({ ...prevState, description: e.target.value, }))
    }


    const handleAddItem = () => {

        if (inputValue === "") {
            setErrorMessage("Please enter a value");
        } else {
            setUI(prevState => ({ ...prevState, content: [...prevState.content, inputValue], }));
            setInputValue("");
            setErrorMessage("");
        }
    }

    const handleDeleteItem = (index: number) => {
        setUI(prevState => ({ ...prevState, content: prevState.content.filter((_, i) => i !== index), }));
    }

    const onSubmit = () => {
        if (newUI.id.length > 0) {
            handleUpdateUi()
        }
    }

    const handleUpdateUi = async () => {

        if (!(toBedone.includes(newUI.id.trim()))) {
            console.log(newUI.id.trim())
            setLoading(true)
            try {
                if (newUI.description === undefined) {
                    await updateDoc(doc(db, "UI", newUI.id), {
                        title: newUI.title,
                        content: newUI.content
                    })
                } else {
                    if (newUI.id.trim() === "genderScreen") {
                        await updateDoc(doc(db, "UI", newUI.id), {
                            title: newUI.title,
                            description: newUI.description,
                            content: newUI.content,
                            showOrientation: newUI.showOrientation
                        })
                    } else {
                        await updateDoc(doc(db, "UI", newUI.id), {
                            title: newUI.title,
                            description: newUI.description,
                            content: newUI.content,
                        })
                    }
                }
                console.log("Document upadated")

            } catch (e) {
                console.error("Document not found: ", e)
            }
            setLoading(false)
            handleCloseModal()
        }
    }


    const handleCloseModal = () => {
        setShowModal(false)
        setUI({
            id: "",
            title: "",
            description: "",
            showOrientation: true,
            content: [],
            contentVisible: []
        })
    }

    useEffect(() => {
        setUI(ui)
    }, [])

    useEffect(() => {
        setUI(ui)
    }, [ui])

    const toBedone = ["mode", "test"]
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {loading
                                ? <Loader openloader={loading} />
                                : <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <FaRegEdit className="h-6 w-6 text-pink-700 mr-2" aria-hidden="true" />
                                        <input
                                            type="text"
                                            name="title"
                                            defaultValue={newUI?.title || ""}
                                            onChange={onTitleChange}
                                            placeholder="Enter title for the screen"
                                            className="w-full rounded-md border-0 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 text-md sm:leading-6" />
                                    </div>

                                    <div className="relative p-6 flex-auto">
                                        <div className="mt-2">
                                            <div>
                                                <div className="space-y-6">
                                                    {
                                                        (newUI.description)
                                                        && <div className="col-span-full">
                                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                                description
                                                            </label>
                                                            <div className="mt-2">
                                                                <textarea
                                                                    id="about"
                                                                    name="about"
                                                                    rows={3}
                                                                    placeholder="write a description you want to show for the screen."
                                                                    onChange={onDescChange}
                                                                    className="block w-full p-2 rounded-md border-0 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 sm:text-md sm:leading-6"
                                                                    defaultValue={newUI?.description || ""}
                                                                />
                                                            </div>
                                                        </div>
                                                    }

                                                    {
                                                        newUI.id.trim() === "genderScreen" &&
                                                        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                                            <div className="flex h-6 items-center">
                                                                <Switch
                                                                    checked={agreed}
                                                                    onChange={setAgreed}
                                                                    className={`${agreed ? "bg-pink-700" : "bg-gray-200"} flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700`}
                                                                >
                                                                    <span className="sr-only">
                                                                        Show orientation
                                                                    </span>
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className={`${agreed ? 'translate-x-3.5' : 'translate-x-0'} h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`} />
                                                                </Switch>
                                                            </div>
                                                            <Switch.Label className="text-sm leading-6 text-gray-600">
                                                                Show orientation
                                                            </Switch.Label>
                                                        </Switch.Group>
                                                    }
                                                    <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                        {
                                                            toBedone.includes(newUI.id.trim())
                                                                ? <h2 className="text-2xl text-gray-300">
                                                                    Not available yet
                                                                </h2>
                                                                : newUI.content.map((option, index) => (
                                                                    <span key={index} className="flex items-center pl-4 bg-gray-200 text-gray-700 rounded-full">
                                                                        <span className="text-sm text-ellipsis">
                                                                            {option}
                                                                        </span>
                                                                        <button onClick={() => handleDeleteItem(index)}
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
                                                            placeholder="Enter an option"
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
                                            onClick={onSubmit}>
                                            Save
                                        </button>
                                    </div>
                                </div>}
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default RegFlowModal