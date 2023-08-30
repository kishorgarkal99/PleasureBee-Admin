import { ReactNode } from "react"

type InputProp = {
    inputType: string,
    plcHolder: string
}
type BtnProp = {
    children: ReactNode,
    onclick: React.MouseEventHandler<HTMLButtonElement>
}
export const TextInput = ({ inputType, plcHolder }: InputProp) => {
    return (
        <input
            className="border border-purple-700 outline-0 px-1 text-md"
            type={inputType}
            placeholder={plcHolder}
            required
        />
    )
}
export const IconButton = ({ children, onclick }: BtnProp) => {
    return (
        <button
            onClick={onclick}
            className="flex justify-center items-center p-3 bg-transparent text-md text-white-700 outline-0 transition-colors duration-200 border-2 border-pink-300 rounded-full hover:bg-gradient-to-r from-pink-700 to-pink-400 hover:text-white hover:border-0 shadow-xl">
            {
                children
            }
        </button>
    )
}

