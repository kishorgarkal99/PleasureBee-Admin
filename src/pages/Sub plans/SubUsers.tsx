import { FaBell, FaComments } from "react-icons/fa";
import Layout from "../../components/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from 'react'
import Loader from "../../components/Loader";
import { useLocation } from "react-router-dom";
import NotFound from "../../components/NotFound";

interface State {
    planName: string,
    planTerm: string,
    userIDs: string[]
}

const SubscriptionUsers = (): JSX.Element => {
    // const params = useParams()
    // const planId = params.id
    const location = useLocation()
    const { planName, planTerm, userIDs } = location.state as State || { planName: "", userIDs: [""] }

    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState([{
        id: "",
        userName: "",
        about: "",
        phoneNumber: "",
        avatar: [""],
        isVerified: false,
        subscription: "",
    }])


    const getUserById = async (id: string) => {
        setLoading(true)
        if (id.length > 8) {
            await getDoc(doc(db, "Users", id)).then((querySnapshot) => {
                try {
                    const user = {
                        id: querySnapshot.id.toString(),
                        userName: querySnapshot.data()?.userName?.toString(),
                        avatar: querySnapshot.data()?.imageURL,
                        about: querySnapshot.data()?.about?.toString(),
                        phoneNumber: querySnapshot.data()?.phone?.toString(),
                        isVerified: querySnapshot.data()?.isVerified,
                        subscription: querySnapshot.data()?.subscription?.toString()
                    }
                    setUsers((prevstate) => [...prevstate, user])
                } catch (error) {
                    console.error(error)
                }
            })
        }
        setLoading(false)
    }

    useEffect(() => {
        userIDs.forEach(id => {
            getUserById(id)
        })
    }, [userIDs])


    return (
        <Layout title="PleasureBee/Users" >
            {loading
                ? <div className="flex justify-center items-center w-full mt-50">
                    <Loader openloader={loading} />
                </div>
                :
                <>
                    {users.length>1
                        ?<div className="m-4 shadow-xl min-h-full rounded-lg bg-gray-100">
                            <div className="w-full overflow-x-auto">
                                <table className="w-full whitespace-no-wrap select-none">
                                    <thead>
                                        <tr className="font-semibold text-left text-gray-400 uppercase border-b border-pink-700 bg-gradient-to-b from-white to-gray-200">
                                            <th className="px-4 py-3">User</th>
                                            <th className="px-4 py-3">Subscription</th>
                                            <th className="px-4 py-3">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y">
                                        {users?.map((user, index) => (
                                            <>
                                                {
                                                    index > 0 &&
                                                    <tr key={index} onClick={() => { }} className="text-gray-700">
                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center text-sm">
                                                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                    <img
                                                                        className="object-cover w-full h-full rounded-full"
                                                                        src={user.avatar[0]}
                                                                        alt=""
                                                                        loading="lazy"
                                                                    />
                                                                </div>
                                                                <p className="font-semibold">{user?.userName}</p>
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-3 text-xs">
                                                            <span
                                                                className="px-2 font-semibold rounded-full leading-tight bg-purple-900 text-yellow-300">
                                                                {planName}
                                                            </span>
                                                            <span className="px-1">
                                                                {planTerm}
                                                            </span>
                                                        </td>

                                                        <td className="px-4 py-3">
                                                            <div className="flex items-center space-x-4 text-sm">
                                                                <button
                                                                    className="flex items-center justify-between px-4 py-2 text-md font-medium leading-5 bg-purple-100 text-pink-700 rounded-full focus:outline-none hover:bg-pink-700 hover:text-white">
                                                                    <FaBell />
                                                                </button>
                                                                <button
                                                                    className="flex items-center justify-between px-4 py-2 text-md font-medium leading-5 bg-purple-100 text-pink-700 rounded-full focus:outline-none hover:bg-pink-700 hover:text-white">
                                                                    <FaComments />
                                                                    <span className="ml-1">Offer</span>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                }
                                            </>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        :<NotFound title="Users" message="No subscribers yet" />
                    }
                </>
            }
        </Layout>
    )
}

export default SubscriptionUsers