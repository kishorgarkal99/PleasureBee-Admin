import { FaCheck } from "react-icons/fa";
import Layout from "../components/Layout";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState, useEffect } from 'react'
import { fa } from "@faker-js/faker";

const Users = (): JSX.Element => {
    const [reload, setLoad] = useState<boolean>(false)
    const [users, setUsers] = useState([{
        id: "",
        userName: "",
        about: "",
        phoneNumber: "",
        avatar: [""],
        isVerified: false,
        subscription: "",
    }])

    const verifyUser = async (i: number) => {
        const userID = users[i].id
        try {
            await updateDoc(doc(db, "Users", userID), {
                isVerified: true
            })
            setLoad(true)
            console.log(`user at ${i} verified`)
        } catch (error) {
            console.error(error)
        }
    }

    const getUsers = async () => {
        await getDocs(collection(db, "Users"))
            .then((querySnapshot) => {
                try {
                    const newData = querySnapshot.docs
                        .map((doc) => ({
                            id: doc.id.toString(),
                            userName: doc.data().userName?.toString(),
                            avatar: doc.data().imageURL,
                            about: doc.data().about?.toString(),
                            phoneNumber: doc.data().phone?.toString(),
                            isVerified: doc.data()?.isVerified,
                            subscription: doc.data().subscription?.toString()
                        }));
                    setUsers(newData)
                } catch (error) {
                    console.error(error)
                }
            })
    }

    useEffect(() => {
        getUsers()
    }, [])
    useEffect(() => {
        getUsers()
    }, [reload])

    return (
        <Layout title="PleasureBee/Users" >
            <div className="m-4 shadow-xl min-h-full rounded-lg bg-gray-100">
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
                                <tr key={index} onClick={() => { }} className="text-gray-700 hover:bg-purple-100 curser-pointer">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img
                                                    className="object-cover w-full h-full rounded-full"
                                                    src={user.avatar[0]}
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-full shadow-inner"
                                                    aria-hidden="true"
                                                ></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">{user.userName}</p>
                                                <p className="text-xs text-gray-600 ">
                                                    {user.about ? user.about : ""}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-4 py-3 text-sm">{user.phoneNumber}</td>

                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight  ${user.isVerified
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                } rounded-full `}
                                        >
                                            {user.isVerified ? "verified" : "not verified"}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3 text-xs">
                                        <span
                                            className={`px-2 py-1 font-semibold leading-tight  ${user.subscription === "Premium"
                                                ? "bg-purple-900 text-yellow-300"
                                                : "bg-gray-200 text-green-700"
                                                } rounded-full `}
                                        >
                                            {user.subscription === "Premium" ? "Premium" : "Free"}
                                        </span>
                                    </td>

                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-4 text-sm">
                                            {
                                                !user.isVerified ?
                                                    <button
                                                        onClick={() => verifyUser(index)}
                                                        className="flex items-center justify-between px-2 py-2 text-md font-medium leading-5 text-green-700 rounded-lg  focus:outline-none hover:bg-gray-200"
                                                        aria-label="Edit"
                                                    >
                                                        <FaCheck />
                                                    </button>
                                                    : <div className="w-8" />
                                            }
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Users