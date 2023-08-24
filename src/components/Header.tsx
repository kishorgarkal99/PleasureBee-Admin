
type HeaderProp = {
    title: string
}
const Header = ({ title }: HeaderProp) => {
    return (
        <div className="mt-2 mx-4 bg-gradient-to-r from-pink-700 to-blue-400 px-16 py-4 rounded-md shadow-xl flex justify-between items-center">
            <span className="text-xl font-bold text-white">{title}</span>
            <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
        </div>
    )
}

export default Header
