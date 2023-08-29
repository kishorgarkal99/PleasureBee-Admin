import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaMinus, FaPlus, FaRegEdit } from 'react-icons/fa'
import { db } from '../config/firebase'
import { doc, getDoc } from "firebase/firestore"

type ModalProp = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    dataId?: string
}
const Modal = ({ open, setOpen, dataId = "" }: ModalProp) => {

    const cancelButtonRef = useRef(null)

    const [inputValue, setInputValue] = useState('');
    const [list, setList] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [data, setData] = useState({
        id: "",
        title: "",
        description: "",
        content: [],
        contentVissible: []
    })


    const handleAddItem = () => {
        if (inputValue === "") {
            setErrorMessage("Please enter a value");
        } else if (list.includes(inputValue)) {
            setErrorMessage("This value already exists in the list");
        } else {
            setList([...list, inputValue]);
            setInputValue('');
            setErrorMessage('');
        }
    };

    const handleDeleteItem = (optn: string) => {
        const updatedList = list.filter((item) => item !== optn);
        setList(updatedList)
    }


    useEffect(() => {
        const getDocument = async () => {
            if (dataId?.length > 0) {
                const docRef = doc(db, "UI", dataId);
                try {
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        console.log(docSnap.data());
                        setData({
                            id: dataId,
                            title: docSnap.data()?.title,
                            description: docSnap.data().description,
                            content: docSnap.data()?.content,
                            contentVissible: docSnap.data()?.contentVissible
                        })
                    } else {
                        console.log("Document does not exist")
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }

        getDocument()
    }, [dataId])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10 w-4/5" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto w-full">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-2 w-full md:w-3/4 lg:w-3/5">
                                <div className="bg-white p-8 w-full">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <FaRegEdit className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                {data?.title}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <form>
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
                                                                    className="block w-full p-2 rounded-md border-0 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 sm:text-md sm:leading-6"
                                                                    defaultValue={data?.description}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                            {
                                                                data?.content?.map((option, index) => (
                                                                    <span key={index} className="flex items-center pl-4 bg-gray-200 text-gray-700 rounded-full">

                                                                        <p className="text-sm text-ellipsis">
                                                                            {option}
                                                                        </p>
                                                                        <button onClick={() => handleDeleteItem(option)} className="font-bold ml-2 text-red-500 bg-gray-100 p-1 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:scale-105">
                                                                            <FaMinus />
                                                                        </button>
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="col-span-full">
                                                    <div>

                                                        <label htmlFor="option" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    </div>
                                </div>
                                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-lg bg-pink-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default Modal
