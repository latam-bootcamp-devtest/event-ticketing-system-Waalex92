import Button from "../../components/Button"

export default function EventView({
    data,
    getDetails,
    handleGoToMenu,
}) {
    return (
        <div className="">
            <div>
                <Button text="Event Management Panel" onClick={() => handleGoToMenu()} className="bg-green-500 hover:bg-blue-600" />
            </div>
            <ul className="space-y-4 flex flex-row justify-between">
                {data.length > 0 ? (
                    data.map((data) => (
                        <li key={data.id} className="flex flex-col justify-around  p-4 m-4 border rounded-lg shadow-md bg-gray-50">
                            <div>
                                <img src={data.image} alt="Logo" />
                                <p className="text-lg font-semibold text-gray-700">Show name: {data.name}</p>
                                <p className="text-gray-600">Date: {Date(data.date)}</p>
                                <p className="text-gray-600">Price: {data.price}</p>
                            </div>
                            <div>
                                <Button text="See Details" onClick={() => getDetails(data.id)} className="bg-blue-500 hover:bg-blue-600" />
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No Events found.</p>
                )}
            </ul>
        </div>
    )
}