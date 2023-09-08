import { FaPlus } from "react-icons/fa";
import Layout from "../../components/Layout"
import { useState } from "react";

interface DynamicFieldProps {
    onRemove: () => void
    fieldType: 'title'
    | 'description'
    | 'content array of string'
    | 'content array of object' | ""
}
interface FieldType {
    label: string;
    value: 'title' | 'description' | 'content array of string' | 'content array of object' | "";
}
const CreateScreen = (): JSX.Element => {

    const DynamicField: React.FC<DynamicFieldProps> = ({ onRemove, fieldType }) => {
        const renderInput = () => {
            switch (fieldType) {
                // case 'number':
                //     return <input type="number" />
                // case 'email':
                //     return <input type="email" />
                // case 'text':
                default:
                    return <input type="text" />
            }
        }

        return (
            <div>
                {renderInput()}
                <button onClick={onRemove}>Remove</button>
            </div>
        )
    }
    const [fields, setFields] = useState<JSX.Element[]>([]);
    const [selectedType, setSelectedType] = useState<FieldType>({ label: "title", value: "title" });
    const [showModal, setShowModal] = useState<boolean>(false);

    const fieldTypes: FieldType[] = [
        { label: 'title', value: 'title' },
        { label: 'description', value: 'description' },
        { label: 'content', value: 'content array of string' },
        { label: 'content', value: 'content array of object' },
    ];

    const addField = (fType: FieldType) => {
        if (fType) {
            const newField = (
                <DynamicField key={fields.length} onRemove={() => removeField(fields.length)} fieldType={selectedType.value} />
            );
            setFields((prevFields) => [...prevFields, newField]);
            setSelectedType({ label: "", value: "" });
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
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-sm">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-xl font-bold text-gray-400">
                                            Select Field
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <div className="relative p-2 flex flex-wrap justify-center items-center">
                                        {fieldTypes.map((type) => (
                                            <button
                                                className="m-2 bg-pink-500 text-white hover:bg-pink-700 font-bold text-sm 
                                                    px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => addField(type)}>
                                                {type.value}
                                            </button>
                                        ))}
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