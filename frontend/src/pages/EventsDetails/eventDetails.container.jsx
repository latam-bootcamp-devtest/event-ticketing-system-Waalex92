import EventDetailsView from "./eventDetails.view"
import { useLocation, useNavigate } from 'react-router-dom';


export default function EventDetailsContainer() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }


    return (
        <EventDetailsView
            data={location.state.details}
            handleGoBack={handleGoBack}
        />
    )
}