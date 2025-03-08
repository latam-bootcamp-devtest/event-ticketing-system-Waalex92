import axios from "axios";

const API_URL = "https://goldfish-app-fbulw.ondigitalocean.app/Event"

export const getEvent = async () => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                applicationId: "ede06343-0bda-4d3e-bc5a-49b7664b83ca"
            }
        })
        return response.data
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
}

export const getEventById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`, {
            params: {
                applicationId: "ede06343-0bda-4d3e-bc5a-49b7664b83ca",
                eventId: id
            }
        })
        return response.data
    } catch (error) {
        console.error("Error fetching event:", error);
        throw error;
    }
}

export const createEvent = async (event) => {
    try {
        const response = await axios.post(API_URL, event);
        return response.data;
    } catch (error) {
        console.error("Error creating event:", error.message);
        throw new Error("Failed to create event. Please check your data.");
    }
};