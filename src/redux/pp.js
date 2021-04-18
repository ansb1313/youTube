// import axios from "axios";
// import { URL } from "../constants/Consts";

// const FetchConsts = {
//     GET: "get",
// };

// const axiosInstance = axios.create({
//     baseURL: URL.API_BASE_URL,
//     timeout: 6000,
// });

// const request = async (method, url, data = {}) => {
//     try {
//         const config = {
//             url,
//             method,
//         };
//         if (method === FetchConsts.GET) {
//             config.params = {
//                 key: URL.API_KEY,
//                 ...data,
//             };
//         } else {
//             config.data = {
//                 key: URL.API_KEY,
//                 ...data,
//             };
//         }

//         const result = await axiosInstance(config);
//         if (result) {
//             return result.data;
//         }
//     } catch (e) {
//         console.log("e", e);
//     }
// };

// const FetchJson = {
//     get: (url, data) => request(FetchConsts.get, url, data),
// };

// export { FetchJson };


export const classification = (data) => {
    if(!data) return null;
    const dataArr = data.split('\n');
    //줄로 나눈다.
 
    const text = dataArr.map((item, i) => {
        const itemWords = item.split(' ');
        const piece = itemWords.map((item, i) => {
            if(item.indexOf('http') !== -1){
                return `<a href="${item}">${item}<a/>`
            }
            return item
        }).join(' ')

        return <div><p dangerouslySetInnerHTML={{__html:piece}}></p></div>
    })

    return text

}