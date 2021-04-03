import {all, call, put, takeLatest, select} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";
import _ from 'lodash';

const saga = function* (){
    yield all([
        takeLatest(Action.Types.GET_VIDEOS, function* ({data}){
           yield put(Action.Creators.updateState({isLoading:true}));

           const prevList = yield select(state => state.videos.list)
           const result = yield call(API.getVideos,data);

          const itemsWithChannel = yield Promise.all(result.items.map(async (item)=>{
               const channelId = item.snippet.channelId;
               const channelData = await API.getChannelData({
                   part:'id, snippet',
                   id:channelId
               });
               item.channelData = channelData?.items[0]?.snippet
               return item;
           }))

           // 이게 ↓↓ if(result && result.length > 0 && Object.keys(result).length)
           // 빈 배열이나 빈 오브젝트는 false 취급하겠다
           if(!_.isEmpty(result)){
               yield put(Action.Creators.setVideos({
                   ...prevList,
                   ...result,
                   items:[
                       ...prevList.items,
                       ...itemsWithChannel
                   ]
               }))
           }
           yield put(Action.Creators.updateState({isLoading:false}))
        }),
        takeLatest(Action.Types.GET_CHANNEL_DATA,function* ({data}){
            yield put(Action.Creators.updateState({isLoading:true}));
            const result = yield call(API.getChannelData,data);
            if(result){
                yield put(Action.Creators.updateState({
                    channelData: result
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}));
        }),
        takeLatest(Action.Types.GET_VIDEOS_DETAIL, function* ({data}){
            yield put(Action.Creators.updateState({isLoading: true}));
            const videoId = data.id;

            const prevCommentData = yield select(state => state.videos.detail.comment)
            const prevRelatedData = yield select(state => state.videos.detail.related)
            const [videoResult, commentResult, relatedResult] = yield all([
                call(API.getVideos, data),
                call(API.getCommentData, {
                    part: 'id,replies,snippet',
                    videoId,
                    order: 'relevance',
                    maxResults: '10',
                }),
                call(API.getRelatedVideo, {
                    part: 'id,snippet',
                    relatedToVideoId: videoId,
                    type: 'video',
                    maxResults: '10',
                })]);


            let relatedVideoData = yield all(relatedResult.items.map(async (item) => {
                const videoData = await API.getVideos({
                    part:'statistics,contentDetails',
                    id:item?.id?.videoId,
                })
                item.videoData = videoData?.items[0]
                return item
            }))

            relatedResult.items = relatedVideoData

            const channelId = videoResult?.items[0]?.snippet?.channelId;
            const channelResult = yield call(API.getChannelData, {
                part:'id, snippet, statistics',
                id:channelId
            })

            if(!_.isEmpty(videoResult)){
                yield put(Action.Creators.updateState({
                    detail: {
                        video:videoResult,
                        // comment:commentResult,
                        comment:{
                            ...prevCommentData,
                            ...commentResult,
                            items:[
                                ...prevCommentData.items,
                                ...commentResult.items
                            ]
                        },
                        related:relatedResult,
                        channel:channelResult
                    }
                }))
            }

            yield put(Action.Creators.updateState({isLoading: false}))
        }),
        takeLatest(Action.Types.GET_VIDEO_DETAIL, function* ({data}){
            yield put(Action.Creators.updateState({isLoading:true}));

            const result = yield call(API.getVideos,data);
            const channelId = result?.items[0]?.snippet?.channelId
            const channelData = yield call(API.getChannelData,{
                part:'id, snippet, statistics',
                id:channelId
            });

            if(result){
                yield put(Action.Creators.updateState({
                    videoDetail:result,
                    channelData:channelData
                }))
            }

            yield put(Action.Creators.updateState({isLoading:false}));
        }),
        takeLatest(Action.Types.GET_COMMENT_DATA, function* ({data}){
            yield put(Action.Creators.updateState({isLoading:true}));

            const prevComment = yield select(state => state.videos.commentData)
            const result = yield call(API.getCommentData,data);

            if(!_.isEmpty(result)){
                yield put(Action.Creators.updateState({
                    commentData: {
                        ...prevComment,
                        ...result,
                        items:[
                            ...prevComment.items,
                            ...result.items
                        ]
                    }
                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}));
        }),
        takeLatest(Action.Types.GET_RELATED_VIDEO, function* ({data}){
            yield put(Action.Creators.updateState({isLoading:true}));

            const prevRelatedVideo = yield select(state => state.videos.relatedVideos)
            const result = yield call(API.getRelatedVideo,data);

            const relatedVideoData = yield all(result.items?.map( async (item) => {
                let videoData = await API.getVideos({
                    part:'statistics,contentDetails',
                    id:item?.id?.videoId,
                })
                item.videoData = videoData?.items[0]
                return item
            }))

            result.items = relatedVideoData

            if(result){
                yield put(Action.Creators.updateState({
                    relatedVideos: {
                        ...prevRelatedVideo,
                        ...result,
                        items:[
                            ...prevRelatedVideo?.items,
                            ...result?.items
                        ]
                    }

                }))
            }
            yield put(Action.Creators.updateState({isLoading:false}));
        }),
    ])
}

export default saga