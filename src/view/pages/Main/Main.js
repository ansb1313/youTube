import React from 'react';
import styled from 'styled-components';
import MainListContainer from "../../container/MainListContainer";
import {ContentContainer} from "../../components/Layout/Layout.Styled";

const Main = () => {

    return(

        <Container>
            <ContentContainer>
                <MainListContainer/>
            </ContentContainer>
        </Container>

    )

}

const Container = styled.div`
  background: rgba(249,249,249);
  flex: 1;
`

export default Main;