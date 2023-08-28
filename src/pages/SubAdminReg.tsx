import { useState } from "react";
import { toast } from "react-toastify";

const SubAdminReg = () => {
    const [formData, setFormData] = useState({
        uname: "",
        email: "",
        password: "",
        password2: "",
    });

    const { uname, email, password, password2 } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target?.name]: e.target.value,
        }));
    };

    const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Passwords din't match");
        } else {
            const admin = {
                uname,
                email,
                password,
            };
            console.log(admin)
        }
    };

    return (
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={() => onSubmit} className="space-y-4" action="#" method="POST">
                <div className="mt-2">
                    <input
                        id="uname"
                        name="uname"
                        type="text"
                        placeholder="Enter username"
                        value={uname}
                        onChange={onChange}
                        required
                        className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={onChange}
                        required
                        className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={onChange}
                        required
                        className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                    />
                </div>
                <div>
                    <input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirm password"
                        value={password2}
                        onChange={onChange}
                        required
                        className="block w-full rounded-md border-0 p-2 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-500 outline-0 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-700 sm:text-sm sm:leading-6"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-pink-700 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SubAdminReg