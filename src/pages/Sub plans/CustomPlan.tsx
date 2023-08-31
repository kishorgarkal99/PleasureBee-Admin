import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { FaPen, FaPlus } from 'react-icons/fa';
import { IconButton } from '../../components/Widgets';
import SubModal from './SubModal';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Plan {
    id: string,
    name: string;
    features: string;
}

const CustomPlan = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [plans, setPlans] = useState<Plan[]>([{
        id: "",
        name: "",
        features: ""
    }])
    const [plan, setPlan] = useState<Plan>({
        id: "",
        name: "",
        features: ""
    })

    const handleOpen = (i: number) => {
        setPlan(plans[i])
        setOpenModal(true)
    }


    const getCustomPlans = async () => {
        await getDocs(collection(db, "CustomSubPlan"))
            .then((querySnapshot) => {
                try {
                    const newData = querySnapshot.docs
                        .map((doc) => ({
                            id: doc.id.toString(),
                            name: doc.data().name.toString(),
                            features: doc.data().features.toString(),
                        }));
                    setPlans(newData)
                } catch (error) {
                    console.error(error)
                }
            })
    }

    useEffect(() => {
        getCustomPlans()
    }, [])

    console.log(plans)

    return (
        <>
            <SubModal model="CustomSubPlan" plan={plan} showModal={openModal} setShowModal={setOpenModal} />
            <Layout title="PleasureBee/Supscription plans">
                <div className="bg-gray rounded-lg p-8 xl:px-16">
                    <h1 className="text-2xl font-bold text-center text-gray-500 mb-4">
                        CUSTOM PLANS
                    </h1>
                    <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {plans.map((plan, index) => (
                            <div key={index} className="w-full rounded-lg shadow-xl bg-white">
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

                                <ul className="list-disc list-inside list-image-[url(assets/icons/listIcon.svg)] text-sm p-4 ">
                                    {plan.features.split(",").map((feature, index) => (
                                        <li key={index} >
                                            {feature.trim()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between">
                        <div />
                        <button
                            onClick={() => setOpenModal(true)}
                            className="mt-4 flex right-0 justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-500 border border-transparent rounded-lg active:bg-pink-600 hover:bg-pink-700 focus:outline-none focus:shadow-outline-purple">
                            <FaPlus className="w-4 h-4 mr-2" />
                            <span className="ml-0.5 text-xl">Create New Plan</span>
                        </button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CustomPlan;
