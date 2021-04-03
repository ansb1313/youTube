import React, {useState} from 'react';
import styled from 'styled-components';
import cn from 'classnames'
import SearchVideoItem from "./SearchVideoItem";
import _ from "lodash";

const NewVideos = ({newVideoData, channelData}) => {

    let mainList = newVideoData?.slice(0,3)
    let more = newVideoData?.slice(3)
    const [moreItem, setMoreItem] = useState(false)
    const onClickMore = () => {
        setMoreItem(!moreItem)
    }

    if(_.isEmpty(mainList)) return <Blank/>;

    return(
        <Container>
            <NewVideosSection>
                {
                    channelData ?
                    <h2><span>{newVideoData[0] && newVideoData[0]?.snippet?.channelTitle}</span>의 최신 동영상</h2> :
                    <h2>최신 동영상</h2>
                }
                {
                    newVideoData[0] &&
                    mainList.map((item, i) => {
                        return <SearchVideoItem key={i} newMark={'newMark'} data={item} />
                    })
                }
                <More className={cn({isActive:moreItem})}>
                    {
                        newVideoData[0] &&
                        more.map((item, i) => {
                            return <SearchVideoItem key={i} newMark={'newMark'} data={item} />
                        })
                    }
                </More>
                {
                    newVideoData.length<=3 ?
                        null
                        :
                    <MoreButton className={cn({isActive:moreItem})} onClick={onClickMore}>
                        <span><b className={'num'}>{newVideoData.length - mainList.length}</b>개 더보기</span>
                    </MoreButton>
                }
            </NewVideosSection>
        </Container>
    )
}

const Container = styled.div`
    
`
const Blank = styled.div`
    height: 15px;
`
const NewVideosSection = styled.div`
  border-top: solid 1px #ddd;
  margin-top: 16px;
  padding-bottom: 24px;
  h2{
    padding-top: 24px;
    margin-bottom: 24px;
    span{
      font-weight: bold;
    }
  }  
`
const MoreButton = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-top: 24px;
  &.isActive{
    display: none;
  }
  span{
    font-size: 12px;
    color:#505050;
    b{
      font-weight: bold;
    }
  }
`
const More = styled.div`
  display:none;
  &.isActive{
    display: block;
  }
`

export default NewVideos;