import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FaMinus, FaPlus, FaRegEdit } from 'react-icons/fa'
import { IconButton } from './Widgets'

type DataType = {
    screenTitle: string,
    options: string[],
    description: string,
    bgImg: string
}

type ModalProp = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    data: DataType,
}
const Modal = ({ open, setOpen, data }: ModalProp) => {

    const cancelButtonRef = useRef(null)
    
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <FaRegEdit className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                {data.screenTitle}
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
                                                                    defaultValue={data.description}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full ml-2 flex gap-2 flex-wrap">
                                                            {
                                                                data.options?.map((option, index) => (
                                                                    <span key={index} className="flex items-center pl-4 bg-gray-200 text-gray-700 rounded-full">

                                                                        <p className="text-sm font-semibold">
                                                                            {option}
                                                                        </p>
                                                                        <button className="font-bold ml-2 text-red-500 bg-gray-100 p-1 rounded-full transitions duration-200 hover:bg-pink-700 hover:text-white hover:scale-105">
                                                                            <FaMinus />
                                                                        </button>
                                                                    </span>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className="col-span-full">
                                                            <div>
                                                                <label htmlFor="option" className="block text-sm font-medium leading-6 text-gray-900">
                                                                    Option
                                                                </label>
                                                                <div className="mt-2 grid grid-cols-12 items-center min-w-full">
                                                                    <input
                                                                        type="text"
                                                                        name="option"
                                                                        id="option"
                                                                        autoComplete="option"
                                                                        className="col-span-10 rounded-md border-0 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 text-md sm:leading-6" />
                                                                    <div className="ml-2 col-span-2">
                                                                        <IconButton onclick={() => { }}>
                                                                            <FaPlus className="w-4 h-4" />
                                                                        </IconButton>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
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
