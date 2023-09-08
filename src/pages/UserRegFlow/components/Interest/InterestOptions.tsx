interface Interest {
    title: string,
    options: Map<string, string>
}

type InterestProp = {
    interest: Interest
}

const Interests: React.FC<InterestProp> = ({ interest }): JSX.Element => {

    const newMap = new Map<string, string>(Object.entries(interest.options));

    const entries = Array.from(newMap.entries());
    // console.log(interest.options)
    return (
        <div className="flex items-center">
            <div>
                <span className="text-gray-500 text-base mr-2">
                    {interest?.title}{":"}
                </span>
                <span>
                    {entries.map((opt, index) =>
                        <span key={index} className="text-sm font-semibold px-2 bg-gray-200 text-gray-500 transitions duration-200 hover:scale-105 hover:text-white hover:bg-pink-700 rounded-full">
                            <img className="w-3 h-3 inline mr-1" src={opt[1]} alt="" />{opt[0]}
                        </span>
                    )}
                </span>
            </div>
        </div>
    )
}

export default Interests