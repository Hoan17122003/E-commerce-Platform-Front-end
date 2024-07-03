import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:80/" || "https://jsonplaceholder.typicode.com", // Thay bằng URL API của bạn
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
