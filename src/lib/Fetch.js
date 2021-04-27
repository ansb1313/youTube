import axios from "axios";
import { API_KEY, URL } from "../constants/Consts";

const FetchConsts = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
};

const axiosInstance = axios.create({
    baseURL: URL.API_BASE_URL,
    timeout: 6000,
});

console.log(axios.create);

const request = async (method, url, data = {}) => {
    try {
        const config = {
            url,
            method,
        };

        if (method === FetchConsts.GET) {
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

        // console.log('@@[Request Config]', config);

        const result = await axiosInstance(config);

        if (result) {
            return result?.data;
        }
    } catch (e) {
        console.log("error", e);
    } finally {
    }
};

const FetchJson = {
    get: (url, data) => request(FetchConsts.GET, url, data),
    post: (url, data) => request(FetchConsts.POST, url, data),
    put: (url, data) => request(FetchConsts.PUT, url, data),
    delete: (url, data) => request(FetchConsts.DELETE, url, data),
};

export { FetchJson };
