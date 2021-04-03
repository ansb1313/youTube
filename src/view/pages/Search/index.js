import React from 'react';
import styled from 'styled-components';
import SearchContainer from "../../container/SearchContainer";

const Search = (props) => {

    return(

        <Container>
            <SearchContainer {...props} />
        </Container>

    )

}

const Container = styled.div`
  width: 100%;
  background: #f9f9f9;
`

export default Search;