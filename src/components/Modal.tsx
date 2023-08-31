import { FaCrown, FaInfo, FaTrashAlt } from "react-icons/fa";

type ModalProp = {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ showModal, setShowModal }: ModalProp) {
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
                                <div className="flex items-center justify-between p-4 border-b border-solid border-slate-400 rounded-t">
                                    <div className="flex justify-start">
                                        <FaCrown className="w-6 h-6 text-pink-700 -rotate-45 -translate-y-2" />
                                        <h3 className="text-2xl text-pink-500 font-semibold">
                                            Premium
                                        </h3>
                                    </div>
                                    <button onClick={() => alert("Are you sure ?")} className="rounded-full p-2 outline-0 ring-0 border-2 text-pink-500 border-pink-500 hover:text-white hover:bg-pink-500">
                                        <FaTrashAlt className="w-4 h-4" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-col">
                                    <p className="text-slate-500 text-lg leading-relaxed">
                                        <FaInfo className="mr-1 text-gray-600 inline text-base" />
                                        <span>
                                            Write the features this plan supports, and use comma to separate each feature.
                                        </span>
                                    </p>
                                    <div className="mb-3 pt-0">
                                        <textarea
                                            rows={4}
                                            placeholder="Placeholder"
                                            className="mt-2 px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded-md text-base border-2 border-gray-300 shadow outline-none focus:outline-none focus:ring-0 w-full" />
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="inline-flex w-full justify-center rounded-lg bg-pink-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
                                        type="button"
                                        onClick={() => setShowModal(false)}
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
    );
}