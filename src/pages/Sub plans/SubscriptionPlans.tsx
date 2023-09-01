import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { FaPen } from 'react-icons/fa';
import { IconButton } from '../../components/Widgets';
import SubModal from './SubModal';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Plan {
    id: string,
    name: string,
    features: string,
    price: { monthly: number, yearly: number },
    users: string[]
}

const SubscriptionPlans = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [plans, setPlans] = useState<Plan[]>([{
        id: "",
        name: "",
        features: "",
        price: { monthly: 0, yearly: 0 },
        users: [""]
    }])
    const [plan, setPlan] = useState<Plan>({
        id: "",
        name: "",
        features: "",
        price: { monthly: 0, yearly: 0 },
        users: [""]
    })

    const handleOpen = (i: number) => {
        setPlan(plans[i])
        setOpenModal(true)
    }

    const getPlans = async () => {
        await getDocs(collection(db, "SubscriptionPlan"))
            .then((querySnapshot) => {
                try {
                    const newData = querySnapshot.docs
                        .map((doc) => ({
                            id: doc.id.toString(),
                            name: doc.data().name.toString(),
                            features: doc.data().features.toString(),
                            price: doc.data().price,
                            users: doc.data().users,
                        }));
                    setPlans(newData)
                } catch (error) {
                    console.error(error)
                }
            })
    }

    useEffect(() => {
        getPlans()
    }, [])

    console.log(plans)

    return (
        <>
            <SubModal model="SubscriptionPlan" plan={plan} showModal={openModal} setShowModal={setOpenModal} />
            <Layout title="PleasureBee/Supscription plans">
                <div className="bg-gray rounded-lg p-8 xl:px-16">
                    <h1 className="text-2xl font-bold text-center text-gray-500 mb-4">
                        BUSINESS MODEL
                    </h1>
                    <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {plans.reverse().map((plan, index) => (
                            <div key={index} className="w-full rounded-lg shadow-xl bg-white flex flex-col justify-between items-center">
                                <div>
                                    <div className="w-full flex items-center justify-center bg-pink-500 text-white p-2">
                                        <div className="w-1/2">
                                            <h2 className="text-2xl font-semibold text-right">
                                                {plan.name}
                                            </h2>
                                        </div>
                                        <div className="w-1/2 flex justify-between items-center">
                                            <div />
                                            <IconButton onclick={() => handleOpen(index)}>
                                                <FaPen className="w-4 h-4" />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div className="py-4 px-8">
                                        <ul className="list-disc list-image-[url(assets/icons/listIcon.svg)] text-base px-4 space-y-2">
                                            {plan.features.split(",").map((feature, index) => (
                                                <>
                                                    <li key={index} className="hover:bg-gray-100">
                                                        {feature.trim()}
                                                    </li>
                                                    <hr className="w-4/5" />
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {plan.name !== "Freemium" && <div className="py-4 px-8 flex justify-center items-center gap-1">
                                    <div className="bg-gray-200 text-2xl text-purple-500 font-bold p-2 rounded-md">
                                        <span>${plan.price.monthly}</span>
                                        <span className="text-base font-semibold text-gray-600">
                                            /Monthly
                                        </span>
                                    </div>
                                    <div className="bg-gray-200 text-2xl text-pink-500 font-bold p-2 rounded-md">
                                        <span>${plan.price.yearly}</span>
                                        <span className="text-base font-semibold text-gray-600">
                                            /Yearly
                                        </span>
                                    </div>
                                </div>}
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default SubscriptionPlans;
