import EventDetailsView from "./eventDetails.view"
import { useLocation } from 'react-router-dom';


export default function EventDetailsContainer() {
    const location = useLocation();



    return (
        <EventDetailsView
            data={location.state.details}
        />
    )
}