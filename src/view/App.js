import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";
import Template from "./components/Tamplate";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Template>
                <Routes/>
            </Template>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 54px;
`;

export default App;