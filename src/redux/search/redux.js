import {createActions, createReducer} from "reduxsauce";

export const initialState = {
    isLoading: false,
    searchResults:{
        items: {
            newVideoData:[],
            relatedVideoData:[],
        },
        channelData:[
            {
                items: {

                }
            }
        ]
    },
    results:{

    }
}

export const Action = createActions({
    updateState:['props'],
    getSearchData:['data', 'reset'],
    getMoreSearchData:['data']
},{
    prefix:'SEARCH/'
});

export default createReducer(initialState,{
    [Action.Types.UPDATE_STATE]:(state, {props}) => ({
        ...state,
        ...props
    })
})

