import { useState } from "react"
import { FaMinus } from "react-icons/fa"
import { IconButton, TextArea, TextInput } from "../../../components/Widgets"


interface DynamicFieldProps {
    onRemove: () => void
    fieldType: string
}

const DynamicField: React.FC<DynamicFieldProps> = ({ onRemove, fieldType }): JSX.Element => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }
    const onDescChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setDescription(e.target.value)
    }
    const onContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setContent(e.target.value)
    }
    
    const renderInput = () => {
        switch (fieldType) {
            case "title":
                return <TextInput name="title" inputType="text" plcHolder="Entere a title here" onChange={onTitleChange} />
            case "description":
                return <TextArea name="description" plcHolder="Entere a screen description here" onChange={onDescChange} />
            case "content array of string":
                return <TextArea name="description" plcHolder="Entere comma separated values of content here" onChange={onContentChange} />

            default:
                return <input type="text" />
        }
    }

    return (
        <div className="flex items-center gap-2">
            {renderInput()}
            <IconButton onclick={onRemove}>
                <FaMinus />
            </IconButton>
        </div>
    )
}

export default DynamicField