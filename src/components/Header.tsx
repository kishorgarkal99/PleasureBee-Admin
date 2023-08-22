
type HeaderProp = {
    title: string
}
const Header = ({ title }: HeaderProp) => {
    return (
        <div className="m-2 bg-gradient-to-r from-pink-700 to-blue-400 px-24 py-6 rounded-md shadow-xl text-xl font-bold text-white flex items-center">{title}
        </div>
    )
}

export default Header
