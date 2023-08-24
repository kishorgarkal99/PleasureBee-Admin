import { FaCheck, FaUserEdit } from "react-icons/fa";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const users = [
    {
        fname: "Fidel",
        lname: "Alemayehu",
        phone: "+25190008560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
        about: "My name is Fidel Alemayehu, and I'm a software engineer",
        verified: false,
        plan: "Free"
    },
    {
        fname: "Arnab",
        lname: "Ghosh",
        phone: "+9190048560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/1.webp",
        about: "My name is Arnab Ghosh, and I'm a software engineer",
        verified: true,
        plan: "Premium"
    },
    {
        fname: "Fikireab",
        lname: "Mekuriaw",
        phone: "+25190008560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/1.webp",
        about: "My name is Fikireab Mekuriaw, and I'm a software engineer",
        verified: false,
        plan: "Free"
    },
    {
        fname: "Fidel",
        lname: "Alemayehu",
        phone: "+25190008560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
        about: "My name is Fidel Alemayehu, and I'm a software engineer",
        verified: false,
        plan: "Free"
    },
    {
        fname: "Fidel",
        lname: "Alemayehu",
        phone: "+25190008560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
        about: "My name is Fidel Alemayehu, and I'm a software engineer",
        verified: false,
        plan: "Free"
    },
    {
        fname: "Fidel",
        lname: "Alemayehu",
        phone: "+25190008560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
        about: "My name is Fidel Alemayehu, and I'm a software engineer",
        verified: true,
        plan: "Premium"
    },
    {
        fname: "Fidel",
        lname: "Alemayehu",
        phone: "+25190008560",
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/5.webp",
        about: "My name is Fidel Alemayehu, and I'm a software engineer",
        verified: false,
        plan: "Free"
    },
]

const Users = () => {
    return (
        <div className="w-full flex h-screen">
            <Sidebar />
            <div className="ml-16 md:ml-64 w-full">
                <Header title="PleasureBee/Users" />
                <div className="my-4 mx-2 shadow-xl min-h-full rounded-md">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-700 uppercase border-b border-purple-700 bg-gradient-to-b from-white to-gray-200">
                                    <th className="px-4 py-3">User</th>
                                    <th className="px-4 py-3">Phone</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Subscription</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                {users?.map((user, index) => (
                                    <tr key={index} className="text-gray-700 hover:bg-gray-100">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center text-sm">
                                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                    <img
                                                        className="object-cover w-full h-full rounded-full"
                                                        src={user.avatar}
                                                        alt=""
                                                        loading="lazy"
                                                    />
                                                    <div
                                                        className="absolute inset-0 rounded-full shadow-inner"
                                                        aria-hidden="true"
                                                    ></div>
                                                </div>
                                                <div>
                                                    <p className="font-semibold">{`${user.fname} ${user.lname}`}</p>
                                                    <p className="text-xs text-gray-600 ">
                                                        {user.about ? user.about : ""}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-sm">{user.phone}</td>

                                        <td className="px-4 py-3 text-xs">
                                            <span
                                                className={`px-2 py-1 font-semibold leading-tight  ${user.verified
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                    } rounded-full `}
                                            >
                                                {user.verified ? "verified" : "not verified"}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-xs">
                                            <span
                                                className={`px-2 py-1 font-semibold leading-tight  ${user.plan === "Premium"
                                                    ? "bg-purple-900 text-yellow-300"
                                                    : "bg-gray-200 text-green-700"
                                                    } rounded-full `}
                                            >
                                                {user.plan === "Premium" ? "Premium" : "Free"}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center space-x-4 text-sm">
                                                {
                                                    !user.verified ?
                                                        <button
                                                            className="flex items-center justify-between px-2 py-2 text-md font-medium leading-5 text-green-700 rounded-lg  focus:outline-none hover:bg-gray-200"
                                                            aria-label="Edit"
                                                        >
                                                            <FaCheck />
                                                        </button>
                                                        :<div className="w-8"/>
                                                }
                                                <button
                                                    className="flex items-center text-lg justify-between px-2 py-2  font-medium leading-5 text-pink-700 rounded-lg  focus:outline-none hover:bg-gray-200"
                                                    aria-label="Edit"
                                                >
                                                    <FaUserEdit />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users