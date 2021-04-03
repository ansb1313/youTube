import React, {useState} from 'react';
import styled from 'styled-components';
import InfiniteScroll from "../InfiniteScroll";
import {dateFromNow, DetailRelatedViewCount, setPlayTime,} from "../../../lib/Common";
import ThumbnailMouseOver from "../Effect/ThumbnailMouseOver";
import {VerticalThreeDot} from "../../../icons/icons";
import ThumbnailMenus from "../Effect/ThumbnailMenu";

const VideoDetailRelatedVideo = ({relatedVideoData=[], getMoreRelatedVideo}) => {


    if(!relatedVideoData) return '...Loading'
    return(
        <InfiniteScroll getMoreItems={getMoreRelatedVideo}>
           <Container>
            <RelatedVideos className={'relatedVideoItem'}>
                {
                    relatedVideoData?.items?.map((item, i) => {
                        return(
                            item?.snippet?.thumbnails?.standard?.url &&
                          <ThumbnailMouseOver key={i}>
                            <RelatedContents
                                             onClick={()=>{window.location.replace(`/#/watch?v=${item?.id?.videoId}`)}}
                            >
                                <RelatedVideoThumb>
                                    <img src={item?.snippet?.thumbnails?.standard?.url} alt=""/>
                                    <ThumbnailMenus className={'thumbnailMenus'} />
                                    <PlayTime className={'playTime'}>
                                        <span>{setPlayTime(item?.videoData?.contentDetails?.duration)}</span>
                                    </PlayTime>
                                </RelatedVideoThumb>
                                <RelatedVideoDesc className={'desc'}>
                                    <h1>
                                        {item?.snippet?.title}
                                    </h1>
                                    <div className="channelId">
                                    <span>
                                        {item?.snippet?.channelTitle}
                                    </span>
                                                {/*<CertifiedIcon/>*/}
                                            </div>
                                            <div className="viewCount">
                                    <span>
                                        조회수 {DetailRelatedViewCount(item?.videoData?.statistics?.viewCount)}회 • {dateFromNow(item?.snippet?.publishedAt)}
                                    </span>
                                    </div>
                                </RelatedVideoDesc>
                            </RelatedContents>
                            <InfoMoreMenu className={'moreMenu'} onClick={(e)=>{e.stopPropagation()}}>
                                  <VerticalThreeDot/>
                              </InfoMoreMenu>
                          </ThumbnailMouseOver>
                        )
                    })
                }
            </RelatedVideos>

            </Container>
        </InfiniteScroll>
    )

}

const Container = styled.div`
  flex: 1;
`
const RelatedVideos = styled.div`
  cursor: pointer;
`
const RelatedVideoThumb = styled.div`
  position: relative;
  width: 168px;
  height: 94px;
  background: #999;
  margin-right: 8px;
  &:hover{
    .laterIcon, .listIcon{
      display: block!important;
    }
  }
  img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`
const RelatedVideoDesc = styled.div`
  flex: 1;  
  width: 226px;
  box-sizing: border-box;
  padding-right: 24px;
  h1{
    font-size: 14px;
    flex: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 6px;
    line-height: 1.2;
  }
  .channelId{
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    span{
      font-size: 13px;
      color: #606060;
      margin-right: 3px;
    }
    svg{
      width: 14px;
      fill: #606060;
    }
  }
  .viewCount{
    span{
      font-size: 13px;
      color: #606060;
    }
  }
`
const RelatedContents = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`
const PlayTime = styled.div`
  word-spacing: -2.7px;
  z-index: 900;
  position:absolute;
  right:4px;
  bottom: 4px;
  height: 19px;
  background:rgba(0,0,0,0.75);
  color: #fff;
  font-size: 12px;
  display: flex;
  font-weight: bold;
  padding:0px 4px 2px 3px!important;
  transition: all 0.3s;
  align-items: center;
  opacity: 1;
  .menus &{
    opacity: 0;
  }
`
const InfoMoreMenu = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  display: none;
  cursor: pointer;
  svg{
    width: 24px;
    fill: #777;
  }
`

export default VideoDetailRelatedVideo;