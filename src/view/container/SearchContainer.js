import React, {useEffect, useState, useRef} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import styled from 'styled-components';
import qs from 'qs';

import SearchResultsItem from "../components/SearchResultsItem";
import {searchActions} from "../../redux/ActionCreators";

const SearchContainer = ({}) => {

    const location = useLocation()
    const prevList = useSelector(state => state.search.searchResults)
    const {searchResults} = useSelector(state => state.search)
    const params = qs.parse(location.search, {ignoreQueryPrefix: true})
    const [moreVideo, setMoreVideo] = useState(1)
    let query = params.search_query

    useEffect(() => {
        getSearchData()
    }, [moreVideo])

    const getSearchData = () => {
        searchActions.getSearchData({
            part: 'snippet',
            q: params.search_query,
            maxResults: 10,
            pageToken: searchResults?.nextPageToken
        })
    }

    const getMoreVideo = () => {
        setMoreVideo(prevPage => prevPage + 1)
    }

    if(!searchResults) return '...';

    return (
        <Container>
            {
                !searchResults
                    ?
                    '데이터가 없습니다'
                    :
                    <SearchResultsItem searchResults={searchResults} getMoreItems={getMoreVideo}/>
            }
        </Container>
    )
}

const Container = styled.div`
  margin: 0 auto;
  padding: 16px 0;
  width: 1100px;
`

export default SearchContainer;