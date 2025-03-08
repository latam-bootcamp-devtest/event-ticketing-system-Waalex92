import { useEffect, useState } from "react";
import { getEvent, createEvent, updateEvent } from "../../api/events.api";
import MenuView from "./menu.view"
import { useNavigate } from 'react-router-dom';


export default function MenuContainer() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        applicationId: "ede06343-0bda-4d3e-bc5a-49b7664b83ca",
        name: "",
        date: "",
        image: "string",
        price: 0,
        location: ""
    });

    const handleGoBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const response = await getEvent();
            setData(response);
        } catch (error) {
            console.error("Error loading events:", error.message);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { eventData } = formData;
            if (formData.id) {
                await updateEvent(formData.id, eventData);
            } else {
                console.log("formData", formData)
                console.log("eventdata", eventData)
                await createEvent(eventData);
            }

            setFormData({
                applicationId: "ede06343-0bda-4d3e-bc5a-49b7664b83ca",
                name: "",
                date: "",
                image: "string",
                price: 0,
                location: ""
            })
            await loadData();
        } catch (error) {
            console.error("Error submitting events:", error.message);
        }
    };

    return (
        <MenuView
            data={data}
            formData={formData}
            handleGoBack={handleGoBack}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
    )
}