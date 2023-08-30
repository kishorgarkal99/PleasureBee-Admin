import React from 'react';
import Layout from '../components/Layout';
import { FaPlus } from 'react-icons/fa';

interface Plan {
    name: string;
    features: string[];
}

interface SubscriptionPlansProps {
    plans: Plan[];
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ plans }) => {
    return (
        <Layout title="PleasureBee/User Resgistration Flow">
            <div className="bg-gray rounded-lg p-8 xl:px-16">
                <h1 className="text-2xl font-bold text-center text-gray-300 mb-4">
                    BUSINESS MODEL
                </h1>
                <div className="block md:flex justify-between">
                    {plans.map((plan, index) => (
                        <div key={index} className="m-2 md:w-1/2 lg:w/3 rounded-lg shadow-xl bg-white">
                            <div className="w-full bg-pink-700 text-white p-2">
                                <h2 className="text-2xl font-semibold text-center">
                                    {plan.name}
                                </h2>
                            </div>
                            <ul className="list-disc list-inside text-sm p-4 ">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between">
                    <div />
                    <button
                        className="mt-4 flex right-0 justify-center items-center px-4 py-2 text-white transition-colors duration-150 bg-pink-700 border border-transparent rounded-lg active:bg-pink-600 hover:bg-orange-700 focus:outline-none focus:shadow-outline-purple">
                        <FaPlus clasName="w-6 h-6 mr-4" />
                        <span className="ml-0.5 text-xl">Add custom plan</span>
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default SubscriptionPlans;
