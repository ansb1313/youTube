import React from 'react';
import styled from 'styled-components';

const imgUrl = 'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'

const Visual = () => {

    return(
        <Container>

        </Container>
    )

}

const Container = styled.div`
  
height: 100vh;
display: flex;  
align-items: center;  
justify-content: center;  
background: url(${imgUrl}) 50%/cover no-repeat;

`

export default Visual;