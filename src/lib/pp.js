import axios from "axios";
import { API_BASE_URL, API_KEY } from "../constants/Consts";

const FetchConts = {
    GET: "get",
};

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 6000,
});

const request = async (method, url, data = {}) => {
    try {
        const config = {
            url,
            method,
        };
        if (method === FetchConts.GET) {
            config.params = {
                key: API_KEY,
                ...data,
            };
        } else {
            config.data = {
                key: API_KEY,
                ...data,
            };
        }

        const result = await axiosInstance(config);

        if (result) {
            return result.data;
        }
    } catch (e) {
        console.log("e", e);
    }
};

const FetchJson = {
    get: (url, data) => request(FetchConts.GET, url, data),
};

export { FetchJson };
