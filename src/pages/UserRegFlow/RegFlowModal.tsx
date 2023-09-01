import { useState } from "react"
import { FaMinus, FaPlus, FaRegEdit } from "react-icons/fa"

interface UI {
    id: string,
    title: string,
    description: string,
    content: string[]
}

type RegFlowModalProp = {
    ui:UI,
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const RegFlowModal = ({ui, showModal,setShowModal }: RegFlowModalProp) => {

    const [dataToEdit, setDataToEdit] = useState<UI>({
        id: "",
        title: "",
        content: [""] || [{}],
        description: "",
    });
    const [inputValue, setInputValue] = useState("");
    const [contentList, setList] = useState<string[]>([]);

    const [errorMessage, setErrorMessage] = useState("")
    const [newTitle, setTitle] = useState("")
    const [description, setDesc] = useState<string>("")
    const [content, setContent] = useState<string[]>([])
    // const [contentVissible, setContentVissible] = useState([])
    // const [showOrientation, setShowOrientation] = useState<boolean>(true)
    
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


    const handleSubmit = () => {
        //screens without description
        if ((
            ui.id.trim() === "drinkScreen")
            || (ui.id.trim() === "educationScreen")
            || (ui.id.trim() === "haveChildrenScreen")
            || (ui.id.trim() === "politicalScreen")
            || (ui.id.trim() === "religion")
            || (ui.id.trim() === "smokeScreen")
            || (ui.id.trim() === "workout")
            || (ui.id.trim() === "zodiacSign")
        ) {
            setContent([...contentList])
            if (newTitle?.length < 3) {
                setTitle(dataToEdit.title)
            }
            const newUI = {
                id: ui.id,
                title: newTitle,
                content: content
            }

            console.log(newUI)
        }
        // screens with description
        else if (
            (ui.id.trim() === "genderScreen")
            || (ui.id.trim() === "liketoDate")
            || (ui.id.trim() === "profilePrompt")
            || (ui.id.trim() === "toFind")
        ) {
            setContent([...contentList])
            if (newTitle?.length < 3) {
                setTitle(dataToEdit.title)
            }
            if (description?.length < 3) {
                setTitle(dataToEdit.description)
            }
            if ((ui.id.trim() === "genderScreen")) {
                const newUI = {
                    id: ui.id,
                    title: newTitle,
                    content: content,
                    // showOrientation: showOrientation,
                    description: description
                }
                console.log(newUI)
            } else {
                const newUI = {
                    id: ui.id,
                    title: newTitle,
                    content: content,
                    description: description
                }
                console.log(newUI)
            }


        } else if ((ui.id.trim() === "intrestScreen")) {
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
    return (
        <>
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
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default RegFlowModal