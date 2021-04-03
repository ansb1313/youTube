import React from 'react'
import styled from 'styled-components';
import {
    LockerIcon,
    SideMenuHomeIcon,
    SideMenuOriginal,
    SideMenuSubscription,
    SideMenuTendingIcon
} from "../../../icons/icons";

import {NavLink} from "react-router-dom";

const IconSideMenu = () => {
    return (
        <Container>
            <InitialItem to={'/'} activeClassName={'activeBtn'}>
                <SideMenuHomeIcon/>
                <span>홈</span>
            </InitialItem>
            <InitialItem to={'/'} activeClassName={'activeBtn'}>
                <SideMenuTendingIcon/>
                <span>인기</span>
            </InitialItem>
            <InitialItem to={'/'} activeClassName={'activeBtn'}>
                <SideMenuSubscription/>
                <span>구독</span>
            </InitialItem>
            <InitialItem to={'/'} activeClassName={'activeBtn'}>
                <SideMenuOriginal/>
                <span>Originals</span>
            </InitialItem>
            <InitialItem to={'/'} activeClassName={'activeBtn'}>
                <LockerIcon/>
                <span>보관함</span>
            </InitialItem>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 4px;
    position:relative;
    width: 72px;
    min-height: 100%;
`;

const InitialItem = styled(NavLink)`
  padding: 16px 0 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  svg{
    width: 24px;
    height: 24px;
    fill: #606060;
  }
  span {
    margin-top: 7.2px;
    color: #303030;
    font-size: 11px;
    display: inline-block;
  }
  &:hover{
    background: rgba(242,242,242);
  }
  &:focus{
    span{
      color: rgba(255,0,0);;
    }
    svg{
      fill: rgba(255,0,0);
    }
  }
`

export default IconSideMenu;