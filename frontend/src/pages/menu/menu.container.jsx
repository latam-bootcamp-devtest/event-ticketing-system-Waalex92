import { useEffect, useState } from "react";
import { getEvent } from "../../api/events.api";
import MenuView from "./menu.view"
import { useNavigate } from 'react-router-dom';


export default function MenuContainer() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

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

    return (
        <MenuView
            data={data}
            handleGoBack={handleGoBack}
        />
    )
}