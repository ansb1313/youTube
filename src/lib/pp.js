import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useOnViewport } from "../hooks/useOnViewport";

const Infinite = ({ children, getMoreItems = () => {} }) => {
    const [sentinelRef, inView] = useOnViewport({
        rootmargin: "300px",
    });

    useEffect(() => {
        if (inView) {
            getMoreItems();
        }
    }, [inView]);

    return (
        <Container>
            {children}
            <Sentinel ref={sentinelRef} />
        </Container>
    );
};

const Container = styled.div``;
const Sentinel = styled.div``;

export default Infinite;
