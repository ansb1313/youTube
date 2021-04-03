import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import cn from 'classnames';

import Header from "../Header";
import SideMenu from "../SideMenu";
import {media} from "../../../styled/Responsive.Styled";
import {withRouter} from "react-router-dom";
import {isFlexibleSideMenu} from "../../../lib/Common";
import {appActions} from "../../../redux/ActionCreators";

const Template = ({children, location}) => {

    const {sidebar} = useSelector(state => state.app);
    const pathname = location.pathname;
    const mobileSizeSearchBoxClose = () => {
        appActions.updateState({
            viewSearchBox:false
        })
    }

    return(
        <Container
            className={cn("Template", {sidebar: sidebar, isFlexibleSideMenu: isFlexibleSideMenu(pathname)})}
            onClick={mobileSizeSearchBoxClose}
        >
            <Header/>
            <SideMenu/>
            {children}
        </Container>
    )
}

const Container = styled.div`
  display: flex;

  &.isFlexibleSideMenu {
      ${media.greaterThan('lg')`
            &.sidebar {
                padding-left: 72px;          
            }  
            padding-left: 240px;    
      `}
      ${media.lessThan('lg')`
            padding-left: 72px;  
      `}
      ${media.lessThan('md')`
            padding-left: 0px;  
      `}
  }
 
`

export default withRouter(Template);