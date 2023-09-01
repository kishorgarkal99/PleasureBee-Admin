interface Interest {
    title: string;
    options: string[];
}
type InterestProp = {
    interest: Interest
}
const Interests = ({ interest }: InterestProp) => {
    return (
        <span className="flex items-center">
            <p className="text-gray-500 text-base mr-2">
                {interest?.title}
            </p>
            <span>
                {interest?.options?.toString().split(",").map((opt: string, index) =>
                    <span key={index} className="text-sm font-semibold px-2 bg-gray-100 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                        {opt}
                    </span>
                )}
            </span>
        </span>
    )
}

export default Interests