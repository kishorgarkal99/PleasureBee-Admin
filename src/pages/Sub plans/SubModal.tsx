import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { useState } from "react";
import { FaCrown, FaDollarSign, FaInfo, FaPen, FaTrashAlt } from "react-icons/fa";
import { db } from "../../config/firebase";
interface Plan {
    id: string,
    name: string,
    features: string,
    price: { monthly: number, yearly: number },
    users: string[]
}

type ModalProp = {
    model: string,
    plan: Plan
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const SubModal: React.FC<ModalProp> = ({ model, plan, showModal, setShowModal }): JSX.Element => {
    const [features, setFeatures] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [newPrice, setPrice] = useState<{ monthly: number, yearly: number }>({
        monthly: 0,
        yearly: 0
    })
    const [editName, setEditName] = useState<boolean>(false)

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleFeatureChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFeatures(event.target.value)
    }
    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice((prevState) => ({
            ...prevState,
            [event.target?.name]: event.target.value,
        }))
    }


    const handleSubmit = () => {
        if (plan?.id) {
            handleUpdatePlan()
        } else {
            handleAddPlan()
        }
    }

    const handleAddPlan = async () => {
        if (name.length < 3 || features.length < 3 || newPrice.monthly < 0 || newPrice.yearly < 0) {
            console.log("Please enter a valid value")
        } else {
            const q = query(collection(db, model), where("name", "==", name))
            const querySnapshot = await getDocs(q)

            if (querySnapshot.docs.length === 0) {
                const newPlan = {
                    name: name,
                    features: features.split(","),
                    price: newPrice,
                    users: []
                }
                try {
                    const docRef = await addDoc(collection(db, model), newPlan)
                    console.log("Registered with ID: ", docRef.id)
                } catch (e) {
                    console.error("Error: ", e);
                }
                setName("")
                setFeatures("")
                setEditName(false)
                setShowModal(false)
            } else {
                console.error("Plan already exists")
            }
        }

    }
    const handleUpdatePlan = async () => {
        if (name.length < 3) {
            setName(plan.name)
        }
        if (features.length < 3) {
            setFeatures(plan.features)
        }
        if ((newPrice.monthly < 0) || (newPrice.yearly < 0)) {
            setPrice(plan.price)
        }
        console.log(name, features, newPrice)
        try {
            await updateDoc(doc(db, model, plan?.id), {
                name: name,
                features: features.split(","),
                price: newPrice,
            })
            console.log("Document upadated")
            setName("")
            setFeatures("")
            setEditName(false)
            setShowModal(false)
        } catch (e) {
            console.error("Document not found: ", e)
        }
    }

    const handleDeletePlan = async () => {
        try {
            await deleteDoc(doc(db, model, plan?.id))
            console.log("Documente deleted")
            setShowModal(false)
        } catch (e) {
            console.error("Error: ", e);
        }
    }

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-4 border-b border-solid border-slate-400 rounded-t">
                                    <div className="flex justify-start items-center">
                                        <FaCrown className="w-6 h-6 text-pink-700 -rotate-45 -translate-y-2" />
                                        {!editName
                                            ? <h3 className="text-2xl text-pink-500 font-semibold">
                                                {plan?.name}
                                            </h3>
                                            :
                                            <div className="ml-2">
                                                <input
                                                    name="name"
                                                    type="text"
                                                    placeholder="Plan name ..."
                                                    defaultValue={plan?.name}
                                                    onChange={handleNameChange}
                                                    required
                                                    className="block w-full rounded-md border-0 p-2 text-2xl text-pink-500 ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400"
                                                />
                                            </div>}
                                        {
                                            !editName && <button onClick={() => setEditName(true)} className="ml-2 rounded-full p-1 translate-y-1 outline-0 ring-0 border-0 text-pink-500 hover:text-white hover:bg-pink-500">
                                                <FaPen className="w-4 h-4" />
                                            </button>
                                        }
                                    </div>
                                    {model === "CustomSubPlan" && <button onClick={handleDeletePlan} className="rounded-full p-2 outline-0 ring-0 border-2 text-pink-500 border-pink-500 hover:text-white hover:bg-pink-500">
                                        <FaTrashAlt className="w-4 h-4" />
                                    </button>}
                                </div>
                                {/*body*/}
                                <div className="relative p-4 flex-col">
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        <FaInfo className="mr-1 text-gray-300 inline text-sm" />
                                        <span>
                                            Write the features this plan supports, and use comma to separate each feature.
                                        </span>
                                    </p>
                                    <div className="mb-3 pt-0">
                                        <textarea
                                            rows={4}
                                            onChange={handleFeatureChange}
                                            placeholder="write you features here "
                                            defaultValue={plan?.features || ""}
                                            className="mt-2 px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded-md text-base border-2 border-gray-300 shadow outline-none focus:outline-none focus:ring-0 w-full" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-gray-400 text-lg leading-relaxed">
                                            <FaDollarSign className="mr-1 text-gray-300 inline text-sm" />
                                            <span>
                                                Price
                                            </span>
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <input
                                                name="monthly"
                                                type="number"
                                                placeholder="Price per month"
                                                defaultValue={plan?.name}
                                                onChange={handlePriceChange}
                                                required
                                                className="mt-2 px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded-md text-base border-2 border-gray-300 shadow outline-none focus:outline-none focus:ring-0 w-full"
                                            />
                                            <input
                                                name="yearly"
                                                type="number"
                                                placeholder="price per month"
                                                defaultValue={plan?.name}
                                                onChange={handlePriceChange}
                                                required
                                                className="mt-2 px-3 py-4 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded-md text-base border-2 border-gray-300 shadow outline-none focus:outline-none focus:ring-0 w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="inline-flex w-full justify-center rounded-lg bg-pink-700 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default SubModal