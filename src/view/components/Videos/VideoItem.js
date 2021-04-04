import React, {useEffect, useCallback, useState} from 'react';
import styled from 'styled-components';
import qs from 'qs'
import cn from 'classnames'

import {dateFromNow, setPlay, setPlayTime, tenThousandFormat, thousandNumberFormat} from "../../../lib/Common";
import {VerticalThreeDot, VideoThumbnailClockIcon, VideoThumbnailStorageIcon} from "../../../icons/icons";

const VideoItem = (props) => {

    const {id, snippet, statistics, channelData, contentDetails} = props
    const viewCount = statistics.viewCount / 10000 > 1 ? thousandNumberFormat(tenThousandFormat(statistics.viewCount)) + '만'
                                                        : thousandNumberFormat(statistics.viewCount);
    const [mouseOverClass, setMouseOverClass] = useState(false)
    const [mouseOver, setMouseOver] = useState(false)
    const onMouseOver = () => {
        setMouseOverClass(true)
    }
    const onMouseOut = () => {
        setMouseOverClass(false)
    }
    const onMouse = () => {
        setMouseOver(true)
    }
    const onMouseLeave = () => {
        setMouseOver(false)
    }

    const qsValue = qs.stringify({
        v:id
    },{ignoreQueryPrefix: true})

    const onClick = (e) => {
        e.stopPropagation()
        window.location.replace(`#/watch?${qsValue}`)
    }

    return(
        <Container onClick={onClick}>
            <Thumb>
                <ThumbContents>
                    <img src={snippet?.thumbnails?.standard?.url} alt=""/>
                </ThumbContents>
                <PlayTime className={'playTime'}>
                    <span>{setPlayTime(contentDetails?.duration)}</span>
                </PlayTime>
                <ThumbnailMenu>
                    <div className="laterIcon">
                        <div className={cn("text",{isActive:mouseOverClass})}
                             onMouseOver={onMouseOver}
                             onMouseLeave={onMouseOut}
                             onClick={(e)=>{e.stopPropagation()}}>
                            <span>나중에 볼 동영상</span>
                        </div>
                        <div className={ cn("icon",{isActive:mouseOverClass})}
                             onMouseOver={onMouseOver}
                             onMouseLeave={onMouseOut}
                             onClick={(e)=>{e.stopPropagation()}}>
                            <VideoThumbnailClockIcon/>
                        </div>
                    </div>
                    <div className="listIcon" >
                        <div className="text" className={cn("text",{isActive:mouseOver})}
                             onMouseOver={onMouse}
                             onMouseLeave={onMouseLeave}
                             onClick={(e)=>{e.stopPropagation()}}>
                            <span >목록에 추가</span>
                        </div>
                        <div className={cn("icon",{isActive:mouseOver}) }
                             onMouseOver={onMouse}
                             onMouseLeave={onMouseLeave}
                             onClick={(e)=>{e.stopPropagation()}}>
                            <VideoThumbnailStorageIcon/>
                        </div>
                    </div>
                </ThumbnailMenu>
            </Thumb>
            <Desc>
                <Avatar>
                    <img src={channelData?.thumbnails.medium.url} alt=""/>
                </Avatar>
                <Info>
                    <h3>{snippet.title}</h3>
                    <p>{snippet.channelTitle}</p>
                    <p>조회수{viewCount}회 {dateFromNow(snippet?.publishedAt)}</p>
                    <InfoMoreMenu className={'moreMenu'} onClick={(e)=>{e.stopPropagation()}}>
                        <VerticalThreeDot/>
                    </InfoMoreMenu>
                </Info>
            </Desc>
        </Container>
    )
}

const Container = styled.div`
  cursor: pointer;
  &:hover{
    .laterIcon, .listIcon{
      display: flex;
    }
    .moreMenu{
      display: block;
    }
    .playTime{
      opacity: 0;
    }
  }
`

const Thumb = styled.div`
  position: relative;
  padding-bottom: ${100 * 9 / 16}% ;
  background: #eee;
`

const Desc = styled.div`
  padding: 12px 0;  
  display: flex;
`

const ThumbContents = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ThumbnailMenu = styled.div`
  position: absolute;
  width: 100%;
  right: 4px;
  top: 4px;
  overflow: hidden;
  &>div{
    position: relative;
    display: none;
    flex-direction:column ;
    align-items: flex-end;
  }
  .icon{
    display: block;
    right: 0;
    top: 0;
    width: 29px;
    height: 29px;
    padding: 1.5px;
    margin-bottom: 4px;
    background: rgba(0,0,0,0.75);
    z-index: 700;
    transition: all 0.3s;
    &.isActive{
      background: #111;
    }
    svg{
      width: 26px;
      fill: #fff;
    }
  }
  .text{
    z-index: 500;
    display: flex;
    right: 0px;
    top: 0px;
    height: 29px;
    padding: 0 5px;
    align-items: center;
    background: #111;
    color: #fff;
    position: absolute;
    font-size: 12px;
    transform: translateX(100%);
    transition: transform 0.3s;
    &.isActive{
      right: 29px;
      transform: none;
    }
  }
  
  
`

const Avatar = styled.div`
  margin-right: 12px;
  img{
    width: 36px;
    height: 36px;
    -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
  }
`

const Info = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding-right: 24px;
  h3{
    font-size: 14px;
    line-height: 1.4;
    color: #222;
    margin-bottom: 6px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  p{
    font-size: 14px;
    line-height: 1.4;
    color: #555;
  }
`
const InfoMoreMenu = styled.div`
  position: absolute;
  right: 2px;
  top: 0px;
  display: none;
  svg{
    width: 24px;
    fill: #777;
  }
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
  padding:0px 4px 1px 3px!important;
  transition: all 0.3s;
  align-items: center;
  opacity: 1;
  &.isActive{
    opacity: 0;
  }
`

export default VideoItem;