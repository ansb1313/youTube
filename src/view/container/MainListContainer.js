import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {videosActions} from "../../redux/ActionCreators";
import GridList from "../components/List/GridList";
import {useSelector} from "react-redux";
import VideoItem from "../components/Videos/VideoItem";
import InfiniteScroll from "../components/InfiniteScroll";

const MainListContainer = () => {

    const videos = useSelector(state => state.videos)
    const [page, setPage] = useState(1)

    useEffect(()=>{
      getVideos()
    },[page])

    const getVideos = () => {
        videosActions.getVideos({
            part:'id,snippet,statistics,contentDetails',
            chart:'mostPopular',
            maxResults:20,
            regionCode:'kr',
            pageToken:videos.list?.nextPageToken
        })
    }

    const renderItem = (item) => {
        return <VideoItem {...item}/>
    }

    const getMoreItems = () => {
        setPage(prevPage => prevPage +1);
    }

    const items = videos?.list?.items

    const data = [
        ...items
    ]

    return(
        <Container>
            <InfiniteScroll getMoreItems={getMoreItems}>
                <GridList data={data} renderItem={renderItem}/>
            </InfiniteScroll>
        </Container>
    )

}

const Container = styled.div`
  background: rgba(249,249,249);
  position: relative;
`

export default MainListContainer;