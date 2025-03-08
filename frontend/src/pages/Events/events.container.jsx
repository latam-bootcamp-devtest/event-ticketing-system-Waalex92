import EventView from "./events.view"
import { useEffect, useState } from "react"
import { getEvent } from "../../api/events.api";


export default function EventContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await getEvent();
            setData(response);
        } catch (error) {
            console.error("Error loading products:", error.message);
        }
    };
    return (
        <EventView
            data={data}
        />
    )
}