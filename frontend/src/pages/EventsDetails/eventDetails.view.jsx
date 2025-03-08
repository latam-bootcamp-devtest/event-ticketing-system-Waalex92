import Button from "../../components/Button"
import { useNavigate } from "react-router-dom";


export default function EventView({
    data
}) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-row justify-center items-center">
            <ul className="space-y-4">
                <li key={data.id} className="justify-center  p-4 m-4 border rounded-lg shadow-md bg-gray-50">
                    <div>
                        <img src={data.image} alt="Logo" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-gray-700">Show name: {data.name}</p>
                        <p className="text-gray-600">Date: {data.date}</p>
                        <p className="text-gray-600">Location: {data.location}</p>
                        <p className="text-gray-600">Description: {data.description}</p>
                        <p className="text-gray-600">Price: {data.price}</p>
                        <p className="text-gray-600">Available Tickets: {data.availableTickets}</p>

                    </div>
                    <div>
                        <Button text="Go back" onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-600" />

                    </div>
                </li>
            </ul>
        </div>
    )
}