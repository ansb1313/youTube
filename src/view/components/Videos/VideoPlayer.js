import React from 'react';
import styled from 'styled-components';
import {LikeDislikeCount, videoDetailPublishedAt, viewCountCommaMark} from "../../../lib/Common";
import {DisLike, Like, MoreDotIcon, ShareIcon, StorageIcon} from "../../../icons/icons";

const VideoPlayer = ({videoData}) => {

    if (!videoData) return '...Loading'
    return (
        <Container>
            <VideoBox>
                <div className={'videoPlayer'}
                     dangerouslySetInnerHTML={{__html: videoData?.items[0]?.player?.embedHtml}}></div>
            </VideoBox>
            <Title>
            <span>
                {videoData?.items[0]?.snippet?.description?.split('\n').slice(2)}
            </span>
                <h1>
                    {videoData?.items[0]?.snippet?.title}
                </h1>
            </Title>
            <Items>
                <div className="videoState">
                <span>
                    조회수 {viewCountCommaMark(videoData?.items[0] && videoData?.items[0]?.statistics?.viewCount)}회 • 최초 공개:{videoDetailPublishedAt(videoData?.items && videoData?.items[0]?.snippet.publishedAt)}
                </span>
                </div>
                <div className="menus">
                    <div className="likeButton">
                        <div>
                            <Like/>
                            <span>
                            {LikeDislikeCount(videoData?.items && videoData?.items[0]?.statistics?.likeCount)}
                        </span>
                        </div>
                        <div>
                            <DisLike/>
                            <span>
                                {LikeDislikeCount(videoData?.items && videoData?.items[0]?.statistics?.dislikeCount)}
                            </span>
                        </div>
                    </div>
                    <div className="menuItem">
                        <div>
                            <ShareIcon/>
                            <span>공유</span>
                        </div>
                        <div>
                            <StorageIcon/>
                            <span>저장</span>
                        </div>
                        <div>
                            <MoreDotIcon/>
                        </div>
                    </div>
                </div>
            </Items>
        </Container>
    )
}

const Container = styled.div`
    
`

const VideoBox = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${100 * 9 / 16}%;
  cursor: pointer;
  background: #999;

  .videoPlayer {
    position: absolute;
    width: 100%;
    height: 100%;

    iframe {
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`
const Title = styled.div`
  padding: 18px 0 10px 0;

  span {
    color: #065fd4;
    font-size: 12px;
    margin-bottom: 5px;
    display: inline-block;
  }

  h1 {
    font-size: 18.5px;
    line-height: 1.3;
  }
`
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;

  .videoState {
    span {
      font-size: 14px;
      color: #505050;
      display: inline-block;
      margin-bottom: 14px;
    }
  }

  .menus {
    display: flex;
    align-items: center;

    .likeButton {
      cursor: pointer;
      border-bottom: solid 2px #808080;

      span {
        font-size: 14px;
        font-weight: bold;
      }
    }

    .menuItem {
      cursor: pointer;
      span {
        font-size: 14px;
      }
    }

    div {
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        margin: 0 10px 14px 10px;

        span {
          color: #707070;
          margin-left: 5px;
          padding-bottom: 4px;
        }

        svg {
          width: 24px;
          height: 24px;
          fill: #909090;
        }
      }
    }
  }
`

export default VideoPlayer;