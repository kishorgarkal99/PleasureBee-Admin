import { FaMinus, FaPlus } from "react-icons/fa";
import Layout from "../../components/Layout"
import { useState } from "react";
import { IconButton, TextArea, TextInput } from "../../components/Widgets";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

interface UI {
    title: string,
    description: string,
    content: string[]
}

interface DynamicFieldProps {
    onRemove: () => void
    fieldType: string
}

const CreateScreen = (): JSX.Element => {

    const [fields, setFields] = useState<JSX.Element[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [content, setContent] = useState<string>("");

    const [ui, setUi] = useState<UI>({
        title: "",
        description: "",
        content: [""]
    })

    const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUi(prevState => ({ ...prevState, title: e.target.value }))
    }
    const onDescChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setUi(prevState => ({ ...prevState, description: e.target.value }))
    }
    const onContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setContent(e.target.value)
    }

    const fieldTypes: string[] = [
        'text', 'text area', 'content array',
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


    const DynamicField: React.FC<DynamicFieldProps> = ({ onRemove, fieldType }): JSX.Element => {

        const renderInput = () => {
            switch (fieldType) {
                case "text":
                    return <TextInput name="title" inputType="text" plcHolder="Entere a title here" onChange={onTitleChange} />
                case "text area":
                    return <TextArea name="description" plcHolder="Entere a screen description here" onChange={onDescChange} />
                case "content array":
                    return <TextArea name="description" plcHolder="Entere comma separated values of content here" onChange={onContentChange} />

                default:
                    return <input type="text" />
            }
        }
        return (
            <div className="w-full flex flex-col justify-center">
                <div className="flex items-center gap-2 my-1">
                    {renderInput()}
                    <IconButton onclick={onRemove}>
                        <FaMinus />
                    </IconButton>
                </div>
            </div>
        )
    }

    const onSubmit = async () => {
        const contArray = content.split(",")
        setUi(prevState => ({ ...prevState, content: contArray }))
        try {
            const docRef = await addDoc(collection(db, "UI"), ui)
            console.log("Registered with ID: ", docRef.id)
            console.log(ui)
        } catch (e) {
            console.error("Error: ", e);
        }
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
                <div className="flex flex-col gap-2 my-1">
                    <p>Question/title</p>
                    <TextInput name="title" inputType="text" plcHolder="Enter question or title here" onChange={onTitleChange} />
                </div>

                {fields.map((field) => field)}
                <div className="flex items-center justify-end gap-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="mt-4 flex right-0 justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-500 border border-transparent rounded-lg active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple">
                        <FaPlus className="w-4 h-4 mr-2" />
                        <span className="ml-0.5 text-xl">Add Field</span>
                    </button>

                    <button
                        onClick={onSubmit}
                        className="mt-4 flex right-0 justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-500 border border-transparent rounded-lg active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple">
                        <span className="ml-0.5 text-xl">Submit</span>
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default CreateScreen