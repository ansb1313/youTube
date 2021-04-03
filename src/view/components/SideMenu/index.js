import React from 'react'
import styled from 'styled-components';
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import FlexibleSideMenu from "./FlexibleSideMenu";
import OverlaySideMenu from "./OverlaySideMenu";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import {FLEXIBLE_SIDE_MENU_PATHNAME, OVERLAY_SIDE_MENU_PATHNAME} from "../../../constants/Consts";
import DetailPageOverlaySideMenu from "./DetailPageOverlaySideMenu";

const SideMenu = () => {

    const {width} = useWindowDimensions();
    const {sidebar} = useSelector(state => state.app);

    return (
        <Container>
            <Route path={FLEXIBLE_SIDE_MENU_PATHNAME} exact={true}>
                {
                    width > 1135
                        ?
                        <FlexibleSideMenu/>
                        :
                        <OverlaySideMenu withIconMenu={true}/>
                }
            </Route>
            <Route path={OVERLAY_SIDE_MENU_PATHNAME}>
                <DetailPageOverlaySideMenu />
            </Route>
        </Container>
    )
}

const Container = styled.div`
    
`;

export default SideMenu;