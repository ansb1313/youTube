import React, { useState } from "react";
import styled from "styled-components";
import { BsDot } from "react-icons/all";
import { dateFromNow, setPlayTime, viewCountCommaMark } from "../../../lib/Common";
import cn from "classnames";
import { VerticalThreeDot, VideoThumbnailClockIcon, VideoThumbnailStorageIcon } from "../../../icons/icons";
import VideoItemThumbnailMenu from "../Effect/VideoItemThumbnailMenu";
// import {useHistory} from "react-router-dom";

const SearchVideoItem = ({ newMark, data }) => {
    const [thumbnailMenu, setThumbnailMenu] = useState(false);
    // const history = useHistory();
    const onClick = () => {
        window.location.replace(`/#/watch?v=${data?.id?.videoId}`);
    };

    return (
        <Container onClick={onClick}>
            {data?.snippet && (
                <VideoItem
                    onMouseOver={() => {
                        setThumbnailMenu(true);
                    }}
                    onMouseLeave={() => {
                        setThumbnailMenu(false);
                    }}
                >
                    <VideoItemThumbnailMenu isActive={thumbnailMenu}>
                        <div className="videoThumb">
                            <div>
                                <img src={data?.snippet.thumbnails.high.url} alt="" />
                            </div>
                            <PlayTime className={cn({ isActive: thumbnailMenu })}>
                                <span>{setPlayTime(data?.videoData?.items[0]?.contentDetails?.duration)}</span>
                            </PlayTime>
                        </div>
                    </VideoItemThumbnailMenu>
                    <div className="videoDetails">
                        <h1 className={"videoTitle"} dangerouslySetInnerHTML={{ __html: data?.snippet?.title }}></h1>
                        <span className={"viewCount"}>
                            조회수 {viewCountCommaMark(data?.videoData?.items[0]?.statistics?.viewCount)}회 <BsDot />
                            {dateFromNow(data?.snippet?.publishedAt)}
                        </span>
                        <div className="channelLogo">
                            <img src={data?.itemChannelData?.thumbnails?.medium?.url} alt="" />
                            <span>{data?.snippet.channelTitle}</span>
                        </div>
                        <h4>{data?.snippet.description}</h4>
                        <div className={`newVideoMark ${newMark}`}>
                            <span>새 동영상</span>
                        </div>
                    </div>
                </VideoItem>
            )}
            <InfoMoreMenu
                className={cn({ isActive: thumbnailMenu })}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <VerticalThreeDot />
            </InfoMoreMenu>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    position: relative;
    cursor: pointer;
`;
const VideoItem = styled.div`
    width: 100%;
    display: flex;
    margin-top: 16px;

    .videoThumb {
        position: relative;
        width: 360px;
        margin-right: 16px;

        div {
            padding-bottom: ${100 * (9 / 16)}%;
            overflow: hidden;

            img {
                position: absolute;
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                border-bottom: solid 1px #f9f9f9;
            }
        }
    }

    .videoDetails {
        flex: 1;

        h1 {
            position: relative;
            top: -1px;
            font-size: 18.5px;
            margin-bottom: 7px;
        }
        .viewCount {
            font-size: 12px;
        }
        .channelLogo {
            margin-top: 15px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            height: 24px;

            img {
                width: 24px;
                height: 24px;
                -webkit-border-radius: 100%;
                -moz-border-radius: 100%;
                border-radius: 100%;
            }

            span {
                font-size: 13px;
                margin-left: 10px;
            }
        }

        h4 {
            font-size: 13px;
            color: #666;
            margin-bottom: 10px;
        }

        .newVideoMark {
            &.newMark {
                display: flex;
            }

            width: 59px;
            height: 18px;
            background: #eeeeee;
            display: none;
            align-items: center;
            justify-content: center;

            span {
                font-size: 12px;
            }
        }
    }
`;
const PlayTime = styled.div`
    word-spacing: -2.7px;
    z-index: 900;
    position: absolute;
    right: 4px;
    bottom: 4px;
    height: 19px;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    font-size: 12px;
    display: flex;
    font-weight: bold;
    padding: 0px 4px 1px 4px !important;
    transition: all 0.3s;
    align-items: center;
    opacity: 1;
    &.isActive {
        opacity: 0;
    }
`;

const InfoMoreMenu = styled.div`
    position: absolute;
    right: 2px;
    top: 0px;
    display: none;
    cursor: pointer;
    svg {
        width: 24px;
        fill: #777;
    }
    &.isActive {
        display: block;
    }
`;
export default SearchVideoItem;
