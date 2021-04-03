import React from 'react';
import styled from 'styled-components';
import VideoDetailComment from "./VideoDetailComment";
import VideoContentsDetail from "./VideoContentsDetail";
import VideoDetailRelatedVideo from "./VideoDetailRelatedVideo";
import VideoPlayer from "./VideoPlayer";

const VideoDetail = ({commentData,
                      videoDetail,
                      channelData,
                    relatedVideos,
                  getMoreComments,
              getMoreRelatedVideo}) => {

    return(
        <Container>
            <MainContents>
                <VideoPlayer videoData={videoDetail}/>
                <VideoContentsDetail channelData={channelData} videoData={videoDetail}/>
                <VideoDetailComment commentData={commentData} videoData={videoDetail} getMoreComments={getMoreComments} />
            </MainContents>
            <VideoDetailRelatedVideo relatedVideoData={relatedVideos} getMoreRelatedVideo={getMoreRelatedVideo}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 25px;
  margin: 0 auto;
  width: 90%;
  display: flex;
`
const MainContents = styled.div`
  width: 74%;
  margin-right: 25px;
`
export default VideoDetail;


























