import React from 'react';
import styled from 'styled-components';
import WatchContainer from "../../container/WatchContainer";

const Watch = (props) => {

    return(
        <Container>
            <WatchContainer {...props} />
        </Container>
    )

}

const Container = styled.div`
    width: 100%;
`

export default Watch;