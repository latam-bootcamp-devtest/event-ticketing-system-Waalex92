

export default function EventView({
    data
}) {
    return (
        <div className="">
            <ul className="space-y-4">
                {data.length > 0 ? (
                    data.map((data) => (
                        <li key={data.id} className="flex justify-between items-center p-4 border rounded-lg shadow-md bg-gray-50">
                            <div>
                                <img src={data.image} alt="Logo" />
                                <p className="text-lg font-semibold text-gray-700">{data.id}</p>
                                <p className="text-gray-600">$ {data.name}</p>
                                <p className="text-gray-600">{data.date}</p>
                                <p className="text-gray-600">{data.price}</p>
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