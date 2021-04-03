import React, {useEffect} from 'react';
import styled from 'styled-components';
import HeaderComponent from "../components/Header";
import {appActions} from "../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {Route, Switch} from "react-router-dom";
import DetailHeader from "../components/Header/DetailHeader";
const HeaderContainer = () => {

    const {sidebar, detailSidebar} = useSelector(state => state.app)

    const sideBarLocation = () => {
        appActions.updateState({
            sidebar:(!sidebar)
        })
    }

    const detailSidebarLocation = () => {
        appActions.updateState({
            detailSidebar:(!detailSidebar)
        })
    }

    const onClickEffect = (event) => {
        const eventEl = event.currentTarget
        eventEl.className += ' isActive'
        setTimeout(()=>{
            eventEl.classList.remove('isActive')
        }, 250)
    }

    const props = {
        sideBarLocation,
        onClickEffect,
        detailSidebarLocation
    }

    return(
        <Container>
            <Switch>
                <Route path={['/','/results']} exact={true}>
                    <HeaderComponent {...props} />
                </Route>
            </Switch>
            <Switch>
                <Route path={'/watch'}>
                    <DetailHeader {...props} />
                </Route>
            </Switch>
        </Container>
    )
}

const Container = styled.div`
    
    
    
`

export default HeaderContainer;