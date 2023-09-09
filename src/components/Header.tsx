
type HeaderProp = {
  title: string
}

const Header: React.FC<HeaderProp> = ({ title }): JSX.Element => {
  return (
    <div className="fixed mt-2 left-16 md:left-64 right-0 mx-4 bg-gradient-to-r from-pink-700 to-blue-400 px-16 py-3 rounded-md shadow-xl flex justify-between items-center z-30">
      <span className="text-md lg:text-xl font-bold text-white ">{title}</span>
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </div>
  );
}

export default Header
