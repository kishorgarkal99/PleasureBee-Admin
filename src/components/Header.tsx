
type HeaderProp = {
    title: string
}
const Header = ({ title }: HeaderProp) => {
    return (
        <div className="mt-2 ml-24 mx-4 bg-gradient-to-r from-pink-700 to-blue-400 px-24 py-4 rounded-md shadow-xl text-xl font-bold text-white flex items-center">{title}
        </div>
    )
}

export default Header
