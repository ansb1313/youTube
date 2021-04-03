import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useOnViewport} from "../../../hooks/useOnViewport";

const InfiniteScroll = ({children, getMoreItems = () => {}}) => {

    const [sentinelRef, inView] = useOnViewport({
        rootMargin:'300px'
    });

    useEffect(() => {
        if(inView){
            getMoreItems()
        }
    },[inView])

    return(
        <Container>
            {children}
            <Sentinel ref={sentinelRef} />
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`
const Sentinel = styled.div`
  z-index: 900;
  height: 10px;
  pointer-events: none;
  position: absolute;
  bottom: 500px;
  background: blue;
`


export default InfiniteScroll;