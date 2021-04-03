import React from 'react';
import styled from 'styled-components';
import {media} from "../../../styled/Responsive.Styled";

const GridList = ({data=[], renderItem}) => {
    if(!data) return '...loading'
    return(
        <Container>
            <Row>
                {
                    data.map((item, i)=>(
                       item?.snippet?.thumbnails?.standard?.url &&
                       <Col key={i}>
                           {renderItem(item)}
                       </Col>
                    ))
                }
            </Row>
        </Container>
    )

}

const Container = styled.div`
  padding:20px;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`

const Col = styled.div`
  padding:0 10px 30px;
  width: 25%;
  ${media.lessThan('lg')`
    width: 33.3333%
  `}
  ${media.lessThan('md')`
    width: 50%
  `}
  ${media.lessThan('xs')`
    width: 100%;
    padding-bottom:20px
  `}
`

export default GridList;