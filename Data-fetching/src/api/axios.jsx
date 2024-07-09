
const axiosInstance = axios.create({
    baseURL: "https://localhost:5000",
    timeout: 10000,
    headers: {
        "content-Type": "application/json",
    }
});

export default axiosInstance;