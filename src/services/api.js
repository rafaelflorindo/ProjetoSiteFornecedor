import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000", //teste local
    //baseURL: "http://172.17.3.163:5000", //produção
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

export default api;