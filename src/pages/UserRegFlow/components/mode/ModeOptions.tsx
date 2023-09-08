interface Mode {
    title: string;
    visible: boolean;
}
type ModestProp = {
    mode: Mode
}
const Modes: React.FC<ModestProp> = ({ mode }: ModestProp): JSX.Element => {
    return (
        <div>
            <span className="text-gray-500 text-base mr-2">
                {mode?.title}{":"}
            </span>
            <span className="text-sm font-semibold px-2 bg-gray-200 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                {mode.visible?.toString()}
            </span>
        </div>
    )
}

export default Modes