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

    const loadData = async () => {
        try {
            const response = await getEvent();
            setData(response);
        } catch (error) {
            console.error("Error loading events:", error.message);
        }
    };

    const getDetails = async (id) => {
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


    return (
        <EventView
            data={data}
            getDetails={getDetails}
        />
    )
}