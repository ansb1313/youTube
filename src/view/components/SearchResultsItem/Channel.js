import React from 'react';
import styled from 'styled-components';
import _ from 'lodash'
import {BsDot} from "react-icons/all";
import {subscriberCount, viewCountCommaMark} from "../../../lib/Common";

const Channel = ({channelData=[]}) => {

    if(_.isEmpty(channelData)) return "채널 데이터가 존재 하지 않습니다";

    return(
        <Container>
            {
                channelData?.map((item, i) => {
                    return(
                    item?.items[0]?.snippet?.thumbnails?.high?.url &&
                    <ChannelSection key={i}>
                        <div className="channelThumb">
                            <img src={item?.items[0]?.snippet?.thumbnails?.high?.url} alt=""/>
                        </div>
                        <div className="textArea">
                            <div className="channelTitle">
                                <h2>{item?.items[0]?.snippet?.title}</h2>
                            </div>
                            <div className="channelDesc">
                                <span>{subscriberCount(item?.items[0]?.statistics?.subscriberCount)} <BsDot/>
                                동영상 {viewCountCommaMark(item?.items[0]?.statistics?.videoCount)}개</span>
                            </div>
                        </div>
                        <div className="subscribeButton">
                            <span>구독</span>
                        </div>
                    </ChannelSection>
                    )
                })
            }
        </Container>

    )

}

const Container = styled.div`
`

const ChannelSection = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  .channelThumb{
    margin-right: 16px;
    width: 360px;
    height: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
      width: 136px;
      height: 136px;
    }
  }
  .textArea{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    .channelTitle{
      font-size: 17.5px;
      margin-bottom: 15px;
    }
    .channelDesc{
      font-size: 13px;
    }
  }
  .subscribeButton{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 71.95px;
    height: 39px;
    background: rgb(204, 0, 0);
    span{
      color: #fff;
    }
  }
`

export default Channel;