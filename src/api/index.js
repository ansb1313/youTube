import {FetchJson} from "../lib/Fetch";

const API = {
    getVideos:(data) => FetchJson.get('/videos', data),
    getChannelData:(data) => FetchJson.get('/channels',data),
    getCommentData:(data) => FetchJson.get('/commentThreads',data),
    getRelatedVideo:(data) => FetchJson.get('/search', data),
    getSearchData:(data) => FetchJson.get('/search',data)
}

export default API;