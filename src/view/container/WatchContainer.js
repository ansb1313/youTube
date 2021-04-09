import React, { useEffect, useState } from "react";
import qs from "qs";
import styled from "styled-components";
import { appActions, videosActions } from "../../redux/ActionCreators";
import { useSelector } from "react-redux";
import VideoDetail from "../components/Videos/VideoDetail";

const WatchContainer = (props) => {
    const { location } = props;
    const params = qs.parse(location.search, { ignoreQueryPrefix: true });
    const detail = useSelector((state) => state.videos.detail);
    const { commentData, videoDetail, channelData, relatedVideos } = useSelector((state) => state.videos);
    const [commentPage, setCommentPage] = useState(1);
    const [moreRelatedVideo, setMoreRelatedVideo] = useState(1);

    useEffect(() => {
        getVideoDetailData();
    }, [params.v]);
    useEffect(() => {
        getRelatedVideoData();
    }, [params.v, moreRelatedVideo]);
    useEffect(() => {
        getCommentData();
    }, [params.v, commentPage]);

    const getCommentData = () => {
        videosActions.getCommentData({
            part: "replies,snippet",
            videoId: params.v,
            order: "relevance",
            maxResults: "10",
            pageToken: commentData?.nextPageToken,
        });
    };
    const getVideoDetailData = () => {
        videosActions.getVideoDetail({
            part: "snippet,contentDetails,player,statistics",
            id: params.v,
        });
    };
    const getRelatedVideoData = () => {
        videosActions.getRelatedVideo({
            part: "id,snippet",
            relatedToVideoId: params.v,
            type: "video",
            maxResults: "15",
            pageToken: relatedVideos.nextPageToken,
        });
    };

    const getMoreComments = () => {
        setCommentPage((prevPage) => prevPage + 1);
    };
    const getMoreRelatedVideo = () => {
        setMoreRelatedVideo((prevPage) => prevPage + 1);
    };

    const data = { commentData, videoDetail, channelData, relatedVideos };

    if (!detail) return "...loading";

    return (
        <Container>
            <VideoDetail {...data} getMoreComments={getMoreComments} getMoreRelatedVideo={getMoreRelatedVideo} />
        </Container>
    );
};

const Container = styled.div`
    background: #f9f9f9;
    width: 100%;
`;

export default WatchContainer;
