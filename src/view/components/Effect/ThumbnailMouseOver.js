import React from 'react';
import styled from 'styled-components';

const ThumbnailMouseOver = ({children}) => {

    return(
        <Container>
            {children}
        </Container>
    )

}

const Container = styled.div`
  position: relative;
  &:hover{
    .playTime{
      opacity: 0;
    }
    .moreMenu{
      display: block;
    }
    .thumbnailMenus{
      display: none;
    }
  }
  
`

export default ThumbnailMouseOver;