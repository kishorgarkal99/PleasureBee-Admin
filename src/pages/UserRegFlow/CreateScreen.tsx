import { FaPlus } from "react-icons/fa";
import Layout from "../../components/Layout"
import { useState } from "react";
import DynamicField from "./components/DynamicUI";


const CreateScreen = (): JSX.Element => {

    const [fields, setFields] = useState<JSX.Element[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const fieldTypes: string[] = [
        'title', 'description', 'content array of string',
    ];

    const addField = (fType: string) => {
        if (fType) {
            const newField = (
                <DynamicField key={fields.length} onRemove={() => removeField(fields.length)} fieldType={fType} />
            );
            setFields((prevFields) => [...prevFields, newField]);
        }
        setShowModal(false)
    }
    const removeField = (index: number) => {
        setFields((prevFields) => prevFields.filter((_, i) => i !== index))
    }

    return (
        <Layout title="PleasureBee/New Registration Flow UI">
            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-sm">

                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-bold text-gray-400">
                                            Select Field
                                        </h3>
                                    </div>
                                    <div className="relative p-2 flex flex-wrap justify-center items-center">
                                        {fieldTypes.map((type) => (
                                            <button
                                                onClick={() => addField(type)}
                                                className="m-2 bg-pink-500 text-white hover:bg-pink-700 font-bold text-sm 
                                                    px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <div></div>
                                        <button
                                            className="inline-flex w-full justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-pink-700 shadow-sm hover:bg-pink-500 hover:text-white sm:ml-3 sm:w-auto"
                                            type="button"
                                            onClick={() => setShowModal(false)}>
                                            Cancle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                {fields.map((field) => field)}
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-4 flex right-0 justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-500 border border-transparent rounded-lg active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple">
                    <FaPlus className="w-4 h-4 mr-2" />
                    <span className="ml-0.5 text-xl">Add Field</span>
                </button>
            </div>
        </Layout>
    )
}

export default CreateScreen