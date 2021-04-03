import React from 'react';
import styled from 'styled-components';
import SearchVideoItem from "./SearchVideoItem";
import InfiniteScroll from "../InfiniteScroll";

const RelatedVideos = ({relatedData=[]}) => {

    if(!relatedData) return '...관련 영상이 없습니다.';

    return(
        <Container>
            <RelatedVideoSection>
                <h2>관련 동영상</h2>
                {
                    relatedData[0] &&
                    relatedData.map((item, i)=>{
                        return <SearchVideoItem key={i} data={item}/>
                    })
                }
            </RelatedVideoSection>
        </Container>
    )

}

const Container = styled.div`
    
`
const RelatedVideoSection = styled.div`
  h2{
    padding-top: 16px;
  }
  border-top:solid 1px #ddd;  
`

export default RelatedVideos;