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

    }
}