import {createActions, createReducer} from "reduxsauce";

const initialState = {
    isLoading:false,
    list:{
        items:[]
    },
    videoDetail: {
        items:[]
    },
    channelData: {
        items:[]
    },
    thumb: {},
    commentData:{
        items:[]
    },
    relatedVideos:{
        items:[]
    },
    detail:{
        video:{
            items:[]
        },
        channel:{
            items:[]
        },
        related:{
            items:[]
        },
        comment:{
            items:[]
        },
    }
}

export const Action = createActions({
    updateState:['props'],
    getVideos:['data'],
    setVideos:['data'],
    getVideosDetail:['data'],
    getChannelData:['data'],
    getChannelThumb:['data'],
    getCommentData:['data'],
    getRelatedVideo:['data'],
    getVideoDetail:['data']
},{
    prefix:'VIDEOS/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE]:(state, {props}) => ({
        ...state,
        ...props
    }),
    [Action.Types.SET_VIDEOS]:(state, {data}) => ({
        ...state,
        list:data
    })
})