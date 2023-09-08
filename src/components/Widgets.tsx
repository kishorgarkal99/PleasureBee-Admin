import { ReactNode } from "react"

type InputProp = {
    name: string,
    inputType: string,
    plcHolder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
interface TextAreaProp {
    name: string,
    plcHolder: string,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

type BtnProp = {
    children: ReactNode,
    onclick: React.MouseEventHandler<HTMLButtonElement>
}

export const TextInput: React.FC<InputProp> = ({ name, inputType, plcHolder, onChange }): JSX.Element => {
    return (
        <input
            name={name}
            type={inputType}
            onChange={onChange}
            placeholder={plcHolder}
            className="w-full rounded-md border-0 p-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 text-md sm:leading-6" />
    )
}

export const TextArea: React.FC<TextAreaProp> = ({ name, plcHolder, onChange }): JSX.Element => {
    return (
        <textarea
            name={name}
            placeholder={plcHolder}
            onChange={onChange}
            rows={3}
            className="block w-full p-2 rounded-md border-0 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 focus:outline-0 sm:text-md sm:leading-6"
        />
    )
}

export const IconButton: React.FC<BtnProp> = ({ children, onclick }): JSX.Element => {
    return (
        <button
            onClick={onclick}
            className="flex justify-center items-center p-3 bg-transparent text-md text-pink-700 outline-0 transition-colors duration-200 border-2 border-pink-300 rounded-full hover:bg-gradient-to-r from-pink-700 to-pink-400 hover:text-white hover:border-0 shadow-xl">
            {
                children
            }
        </button>
    )
}
