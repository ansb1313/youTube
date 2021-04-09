import { all, call, takeLatest, put, select } from "redux-saga/effects";
import { Action, initialState } from "./redux";
import dayjs from "dayjs";
import API from "../../api";
import _ from "lodash";

function* saga() {
    yield all([
        takeLatest(Action.Types.GET_SEARCH_DATA, function* ({ data, reset }) {
            yield put(Action.Creators.updateState({ isLoading: true }));

            const prevList = reset ? initialState.searchResults : yield select((state) => state.search.searchResults);
            const result = yield call(API.getSearchData, data);

            const channelArr = result?.items?.filter((item) => item?.id?.kind == "youtube#channel");

            let channelData = yield Promise.all(
                channelArr.map(async (item) => {
                    const channelId = item.snippet.channelId;
                    let channelData = await API.getChannelData({
                        id: channelId,
                        part: "snippet,statistics",
                    });
                    return channelData;
                })
            );

            const videoArr = result.items.filter((item) => item?.id?.kind == "youtube#video");

            let itemsChannelWithVideoData = yield Promise.all(
                videoArr?.map(async (item) => {
                    const channelId = item.snippet.channelId;
                    let itemChannelData = await API.getChannelData({
                        id: channelId,
                        part: "snippet",
                    });
                    let videoId = item?.id?.videoId;
                    let videoData = await API.getVideos({
                        part: "id,snippet,statistics,contentDetails",
                        id: videoId,
                    });
                    item.itemChannelData = itemChannelData?.items[0]?.snippet;
                    item.videoData = videoData;
                    return item;
                })
            );

            result.channelData = channelData;
            result.items = itemsChannelWithVideoData;

            let date = dayjs();

            const newVideoData = result.items.filter((item) => date.diff(item?.snippet?.publishedAt, "hour") < 25);
            const relatedVideoData = result.items.filter((item) => date.diff(item?.snippet?.publishedAt, "hour") >= 25);

            result.items = { newVideoData: newVideoData, relatedVideoData: relatedVideoData };

            if (!_.isEmpty(result)) {
                yield put(
                    Action.Creators.updateState({
                        searchResults: {
                            ...prevList,
                            ...result,
                            channelData: [...prevList.channelData, ...result.channelData],
                            items: {
                                ...prevList?.items,
                                ...result?.items,
                                newVideoData: [...prevList?.items?.newVideoData, ...result?.items?.newVideoData],
                                relatedVideoData: [...prevList?.items?.relatedVideoData, ...result?.items?.relatedVideoData],
                            },
                        },
                    })
                );
            }

            yield put(Action.Creators.updateState({ isLoading: false }));
        }),
    ]);
}

export default saga;
