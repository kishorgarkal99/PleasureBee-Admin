
type HeaderProp = {
    title: string
}
const Header = ({ title }: HeaderProp) => {
    return (
        <div className="w-full bg-black h-16 px-16 text-white flex items-center">{title}</div>
    )
}

export default Header
