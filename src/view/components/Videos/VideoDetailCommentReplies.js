import React, {useState} from 'react';
import styled from 'styled-components';
import {DisLike, InvertedTriangle, Like} from "../../../icons/icons";
import cn from "classnames";
import {dateFromNow} from "../../../lib/Common";

const VideoDetailCommentReplies = ({data, item}) => {

    const [reply, setReply] = useState(false)
    const onClickReply = () => {
        setReply(value => !value)
    }
    if(!item) return '...loading'
    return (
        <Container>
            {
                data ?
                    reply ?
                        <div className="replyClose">
                            {InvertedTriangle()}
                            <span onClick={onClickReply}>
                                답글 <b>{data}</b>개 숨기기
                            </span>
                        </div>
                        :
                        <div className="reply">
                            {InvertedTriangle()}
                            <span onClick={onClickReply}>
                                답글 <b>{data}</b>개 보기
                            </span>
                        </div>
                    :
                    null
            }
            {
                item?.replies?.comments?.map((item, i) => {
                    return (
                        <Replies className={cn('replies',{isActive:reply})} key={i}>
                            <div className="replyAvatar">
                                <img src={item?.snippet?.authorProfileImageUrl} alt=""/>
                            </div>
                            <div className="commentItem">
                                <div className="replyUserId">
                                                            <span
                                                                className={'userId'}>{item?.snippet?.authorDisplayName} </span>
                                    <span
                                        className={'publishedAt'}>{dateFromNow(item?.snippet?.publishedAt)}</span>
                                </div>
                                <div className="comments">
                                    {item?.snippet?.textOriginal.split('\n').map((item, i) => {
                                        return (
                                            <p key={i}>
                                                {item}
                                            </p>
                                        )
                                    })}
                                </div>
                                <div className="likeCountAndReply">
                                    <div className="like">{Like()} <span
                                        className={'likeCount'}>{item?.snippet?.likeCount == 0 ? null : item?.snippet?.likeCount}</span>
                                    </div>
                                    <div className="dislike">{DisLike()} </div>
                                    <span className={'likeCountReply'}>답글</span>
                                </div>
                            </div>
                        </Replies>
                    )
                })
            }
        </Container>

    )

}

const Container = styled.div`
  display: flex;
  margin-bottom: 16px;
  flex-direction: column;
  .reply{
    box-sizing: border-box;
    margin-bottom: 12px;
    padding-left: 59px;
    display: flex;
    align-items: center;
    span{
      color: #065fd4;
      cursor: pointer;
      font-size: 14px;
      b{
        font-weight: bold;
      }
    }
    svg{
      width: 20px;
      fill: #065fd4;
    }
  }
  .replyClose{
    box-sizing: border-box;
    margin-bottom: 12px;
    padding-left: 59px;
    display: flex;
    align-items: center;
    span{
      cursor: pointer;
      color: #065fd4;
      font-size: 14px;
      b{
        font-weight: bold;
      }
    }
    svg{
      width: 20px;
      fill: #065fd4;
      transform: rotate(180deg);
    }
  }
  svg{
    cursor: pointer;
  }
`
const Replies = styled.div`
  box-sizing: border-box;
  padding: 0 64.5px;
  margin-bottom: 14px;
  display: none;
  &.isActive{
    display: flex;
  }
  .replyAvatar{
    margin-right: 16px;
    img{
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 100%;
    }
  }
  .commentItem{
    flex: 1;
    .replyUserId{
      margin-bottom: 8px;
      display: flex;
      .userId{
        font-size: 13px;
        margin-right: 5px;
      }
      .publishedAt{
        font-size: 13px;
        color: #808080;
      }
    }
    .comments{
      p{
        font-size: 14px;
        margin-bottom: 6px;
        line-height: 1.4;
      };
    }
    .likeCountAndReply{
      display: flex;
      align-items: center;
      span{
        font-size: 14px;;
      }
      .like{
        display: flex;
        align-items: center;
        .likeCount{
          height: 18px;
          margin-left: 8px;
          font-size: 14px;
          line-height: 1.2;
          display: inline-block;
          margin-right: 15px;
        }
      }
      .dislike{
        margin-right: 25px;
      }
      .likeCountReply{
        padding-bottom: 5px;
        color: #808080;
      }
      svg{
        width: 16px;
        fill: #909090;
      }
    }
  }
    
    
`
export default VideoDetailCommentReplies;