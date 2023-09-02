interface Interest {
    title: string;
    options: string[];
}
type InterestProp = {
    interest: Interest
}
const Interests = ({ interest }: InterestProp) => {
    return (
        <div className="flex items-center">
            <div>
                <span className="text-gray-500 text-base mr-2">
                    {interest?.title}{":"}
                </span>
                <span>
                    {interest?.options?.toString().split(",").map((opt: string, index) =>
                        <span key={index} className="text-sm font-semibold px-2 bg-gray-200 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                            {opt}
                        </span>
                    )}
                </span>
            </div>
        </div>
    )
}

export default Interests