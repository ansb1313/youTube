import React from 'react';
import styled from 'styled-components';
import {MdSort} from "react-icons/all";
import {DisLike, Like} from "../../../icons/icons";
import {dateFromNow, LikeCountComma, viewCountCommaMark} from "../../../lib/Common";
import InfiniteScroll from "../InfiniteScroll";
import VideoDetailCommentReplies from "./VideoDetailCommentReplies";

const VideoDetailComment = ({videoData, commentData, getMoreComments}) => {

    if (!commentData) return '...Loading'
    return (
        <InfiniteScroll getMoreItems={getMoreComments}>
            <Container>
                <Comment>
                    <CommentTotal>
                        <div className="total">
                            <span>댓글 {viewCountCommaMark(videoData?.items && videoData?.items[0]?.statistics?.commentCount)}개</span>
                        </div>
                        <div className="commentSort">
                            <MdSort/>
                            <span>정렬 기준</span>
                        </div>
                    </CommentTotal>
                    <AddComments>
                        <div className="avatar">
                            <img src="" alt=""/>
                        </div>
                        <form className={'commentForm'}>
                            <input type="text" placeholder={'공개 댓글 추가...'}/>
                            <div className="commentButton">
                                <div className="cancel">
                                    <span>취소</span>
                                </div>
                                <div className="submit">
                                    <span>댓글</span>
                                </div>
                            </div>
                        </form>
                    </AddComments>
                    {
                        commentData?.items?.map((item, i) => {
                            let commentLikeCount = item?.snippet?.topLevelComment?.snippet?.likeCount;
                            let comment = item?.snippet?.topLevelComment?.snippet?.textOriginal

                            return (
                                <div key={i}>
                                    <Comments>
                                        <div className="wrap">
                                            <div className="avatar">
                                                <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
                                                     alt=""/>
                                            </div>
                                            <div className="commentItem">
                                                <div className="user">
                                                    <div className="userId">
                                                        <span>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName}</span>
                                                    </div>
                                                    <div className="published">
                                                        <span>{dateFromNow(item?.snippet?.topLevelComment?.snippet?.publishedAt)}</span>
                                                    </div>
                                                </div>
                                                <div className="comment">
                                                    {
                                                        comment.split('\n').map((item, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <p>{item}</p>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="items">
                                                    <div className={'like'}>
                                                        <Like/>
                                                        <span>{LikeCountComma(commentLikeCount)}</span>
                                                    </div>
                                                    <div className="disLike">
                                                        <DisLike/>
                                                    </div>
                                                    <div className="addComment">
                                                        <span>답글</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <VideoDetailCommentReplies data={item?.snippet?.totalReplyCount} item={item}/>
                                    </Comments>
                                </div>
                            )
                        })
                    }
                </Comment>
            </Container>
        </InfiniteScroll>
    )

}

const Container = styled.div`
  svg{
    cursor: pointer;
  }  
`
const Comment = styled.div`
`
const CommentTotal = styled.div`
  padding: 25px 0;
  display: flex;
  align-items: center;
  .commentSort{
    margin-left: 32px;
    display: flex;
    align-items: center;
    span{
      font-size: 14px;
      color: #606060;
      margin-left: 8px;
    }
    svg{
      fill: #909090;
      font-size: 24px;
      cursor: pointer;
    }
  }
`
const AddComments = styled.div`
  display: flex;
  .avatar {
    background: #ccc;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin-right: 22px;
  }

  form {
    flex: 1;
    width: 100%;

    input {
      display: inline-block;
      width: 100%;
      border-top: none;
      border-right: none;
      border-left: none;
      border-bottom: solid 1px #999;
      box-sizing: border-box;
      padding:5px 0;
      background: #f9f9f9;
      &::placeholder{
        font-size: 14px;
      }
    }

    .commentButton {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 8px;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 71.95px;
        height: 39px;
        background: #c9c9c9;
        margin-left: 8px;
        -webkit-border-radius: 2px;-moz-border-radius: 3px;border-radius: 3px;
        font-size: 14px;
      }
    }
  }
`
const Comments = styled.div`
  display: flex;
  margin-bottom: -5px;
  flex-direction: column;
  .wrap{
    display: flex;
    width: 100%;
    .avatar {
      background: #065fd4;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      width: 42px;
      height: 42px;
      margin-right: 22px;
      img{
        -webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;
        display: block;
      }
    }
    .commentItem{;
      flex: 1;
      .user{
        cursor: pointer;
        margin-bottom: 8px;
        display: flex;
        span{
          font-size: 13px;
        }
        .published{
          margin-left: 5px;
          color: #606060;
        }
      }
      .comment{
        font-size: 14px;
        color: #202020;
        margin-bottom: 12px;
        line-height: 1.4;
      }
    }
    .items{
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      .like{
        width: 70px;
        margin-right: 0px;
        margin-bottom: 5px;
      }
      div{
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
      span{
        display: inline-block;
        font-size: 13px;
        color: #707070;
        margin-left: 10px;
      }
      .addComment{
        margin-left: 5px;
      }
      svg{
        width: 16px;
        fill: #909090;
      }
    }
  }
`

export default VideoDetailComment;