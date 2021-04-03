import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import {CertifiedIcon, DisLike, Like, MoreDotIcon, ShareIcon, StorageIcon} from "../../../icons/icons";
import {classification, subscriberCount,} from "../../../lib/Common";

const VideoContentsDetail = ({videoData, channelData}) => {

    const description = videoData?.items[0]?.snippet?.description;
    const [moreInfo, setMoreInfo] = useState(false)

    const onClickMore = () => {
        setMoreInfo(true)
    }
    if(!channelData) return '...Loading';
    return(
        <Container>
            <ContentsDetail>
                <Info>
                    <ChannelDesc>
                        <div className="profileImage">
                            <img src={channelData?.items[0]?.snippet?.thumbnails?.high?.url} alt=""/>
                        </div>
                        <div className="channelTitle">
                            <div className={'title'}>
                                <span>{videoData?.items && videoData?.items[0]?.snippet?.channelTitle}</span>
                                <CertifiedIcon/>
                            </div>
                            <div className="subscribe">
                                구독자 {subscriberCount(channelData?.items && channelData?.items[0]?.statistics?.subscriberCount)}명
                            </div>
                        </div>
                        <div className="subscribeButton">
                            <span>구독</span>
                        </div>
                    </ChannelDesc>
                </Info>
                <VideoInfo>
                    <Summary>
                        <div className="desc">
                            {classification(description)}
                        </div>
                    </Summary>
                    <MusicDetails>
                        <div className={'openMusicDetail'} onClick={onClickMore}>
                            <span>더보기</span>
                        </div>
                        <div className={cn("more",{isActive:moreInfo})}>
                            <h5>이 동영상의 음악</h5>
                            <div className={'musicLink'}>
                                <span>자세히 알아보기</span>
                            </div>
                            <div className="music">
                                <div>
                                    <span className={'article'}>노래</span>
                                    <span className={'musicContents'}>Main Title (From “The Good, The Bad And The Ugly")</span>
                                </div>
                                <div>
                                    <span className={'article'}>아티스트</span>
                                    <span className={'musicContents'}>The City of Prague Philharmonic Orchestra</span>
                                </div>
                                <div>
                                    <span className={'article'}>앨범</span>
                                    <span className={'musicContents'}>Way Out West</span>
                                </div>
                                <div>
                                    <span className={'article'}>작곡가</span>
                                    <span className={'musicContents'}>Ennio Morricone</span>
                                </div>
                                <div>
                                    <span className={'article'}>YouTube 라이선스 제공자</span>
                                    <span className={'musicContents'}>Entertainment One U.S., LP(Silva Screen Records 대행);
                                            UNIAO BRASILEIRA DE EDITORAS DE MUSICA - UBEM,
                                            LatinAutor, União Brasileira de Compositores,
                                            Sony ATV Publishing, BMI - Broadcast Music Inc.,
                                            LatinAutor - SonyATV, LatinAutorPerf 및 음악 권리 단체 15개</span>
                                </div>
                            </div>
                            <div className={'closeMusicDesc'} onClick={()=>{setMoreInfo(false)}}>
                                <span>간략히</span>
                            </div>
                        </div>
                    </MusicDetails>
                </VideoInfo>
            </ContentsDetail>
        </Container>
    )

}

const Container = styled.div`
    
`
const ContentsDetail = styled.div`
  width: 100%;  
`
const Info = styled.div`
`
const ChannelDesc = styled.div`
  padding: 16px 0 12px 0;
  display: flex;
  align-items: center;
  .profileImage{
    
    margin-right: 16px;
    padding: 1.5px 0;
      img{
        width: 48px;
        height: 48px;
        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
    }
  }
  .channelTitle{
    flex: 1;
    .title{
      display: flex;
      align-items: center;
      color: #303030;
      margin-bottom: 2px;
      span{
        &:lang(en){
          font-weight:bold;
        }
        font-size: 15px;
        padding-bottom: 1px;
        display: inline-block;
      }
      svg{
        width: 14px;
        height: 14px;
        fill: #606060;
        margin-left: 5px;
      }
    }
    .subscribe{
      font-size: 14px;
      color: #606060;
    }
  }
  .subscribeButton{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 71.95px;
    height: 39px;
    background: #cc0000;
    span{
      color: #fff;
      font-size: 14px;
    }
  }
`
const VideoInfo = styled.div`
  padding: 0 64px;
  border-bottom: solid 1px #ddd;
`
const Summary = styled.div`
  .desc{
    padding: 5px 0 25px 0;
    div{
      padding: 0px 0px 10px 0;
      box-sizing: content-box;
    }
    p{
      font-size: 14px;
      line-height: 18px;
    }
    a,
    .tag {
      color: #065fd4;
      font-size: 14px;
    }
  }

  .tags{
    display: flex;
    flex-direction: column;
    .tag,
    span{
      color: #065fd4;
      font-size: 14px;
      display: inline-block;
      margin-bottom: 10px;
    }
  }
`
const MusicDetails = styled.div`
  padding-bottom: 20px;
  .openMusicDetail{
    color: #505050;
    font-size: 13px;
    cursor: pointer;
  } 
  .more{
    margin-top: 10px;
    border-top: solid 1px #ddd;
    box-sizing: border-box;
    padding-top: 10px;
    display: none;
    &.isActive{
      display: block;
    }
    h5{
      font-size: 14px;
    }
    .musicLink{
      margin: 14px 0 10px 0;
      span{
        font-size: 14px;
      }
    }
    .music{
      div{
        width: 100%;
        display: flex;
        span{
          line-height: 2;
        }
        &:nth-child(1){
          .musicContents{
            color: #065fd4;
          }
        }
      }
      .article{
        font-size: 14px;
        color: #505050;
        width: 20%;
        display: inline-block;
        margin-right: 20px;
      }
      .musicContents{
        flex: 1;
        font-size: 14px;
        font-weight: bold;
        color: #404040;
      }
    }
    .closeMusicDesc{
      cursor: pointer;
      font-size: 14px;
      color: #505050;
    }
  }  
`

export default VideoContentsDetail;