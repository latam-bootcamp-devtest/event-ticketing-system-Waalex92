import EventView from "./events.view"
import { useEffect, useState } from "react"
import { getEvent, getEventById } from "../../api/events.api";
import { useNavigate } from "react-router-dom";


export default function EventContainer() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const handleGoToDetails = (response) => {
        navigate('/details', { state: { details: response } });
    }

    const handleGoToMenu = () => {
        navigate('/menu')
    }

    const loadData = async () => {
        try {
            const response = await getEvent();
            setData(response);
        } catch (error) {
            console.error("Error loading events:", error.message);
        }
    };

    const getDetailsById = async (id) => {
        try {
            const response = await getEventById(id);
            setDetails(response);
            if (response) {
                handleGoToDetails(response);
            }

        } catch (error) {
            console.error("Error loading events:", error.message);
        }
    }

    const createEvent = async (event) => {
        try {
            const response = await axios.post(API_URL, event);
            return response.data;
        } catch (error) {
            console.error("Error creating event:", error.message);
            throw new Error("Failed to create event. Please check your data.");
        }
    };


    return (
        <EventView
            data={data}
            getDetails={getDetailsById}
            handleGoToMenu={handleGoToMenu}
        />
    )
}