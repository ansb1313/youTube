import React from 'react';
import styled from 'styled-components';
import {SearchFilterICon} from "../../../icons/icons";
import Channel from "./Channel";
import NewVideos from "./NewVideos";
import RelatedVideos from "./RelatedVideos";
import InfiniteScroll from "../InfiniteScroll";
import SearchVideoItem from "./SearchVideoItem";


const SearchResultsItem = ({searchResults, getMoreItems}) => {



    if(!searchResults) return '...loading'
    return(
        <Container>
            <InfiniteScroll getMoreItems={getMoreItems}>
                <Filter>
                    <SearchFilterICon/>
                    <span>필터</span>
                </Filter>

                <Channel channelData={searchResults?.channelData}/>
                <NewVideos newVideoData={searchResults?.items?.newVideoData} channelData={searchResults?.channelData} />
                <RelatedVideos relatedData={searchResults?.items?.relatedVideoData}/>
            </InfiniteScroll>
        </Container>
    )
}

const Container = styled.div`

`
const Filter = styled.div`
  width: 100%;  
  height: 36px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #ddd;
  span{
    font-size: 14px;
    margin-left: 8px;
    color: #606060;
  }
  svg{
    width: 24px;
    fill:#606060;
  }
`


export default SearchResultsItem;