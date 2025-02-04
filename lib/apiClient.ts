import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Connect-Type": "application/json",
        // "Authorization": `Beare {token}`
    },
});

export default apiClient;