
type InputProp = {
    inputType:string,
    plcHolder:string
}
const TextInput = ({inputType, plcHolder}:InputProp) => {
    return (
        <input
            className="border border-purple-700 outline-0 px-1 text-md"
            type={inputType}
            placeholder={plcHolder}
            required
        />
    )
}
export default TextInput