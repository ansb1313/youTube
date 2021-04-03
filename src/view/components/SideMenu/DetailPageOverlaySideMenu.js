import React, {useEffect} from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import TextSideMenu from "./TextSideMenu";
import {appActions} from "../../../redux/ActionCreators";
import IconSideMenu from "./IconSideMenu";
import {media} from "../../../styled/Responsive.Styled";
import RippleEffect from "../Effect/RippleEffect";
import {MenuBar, YoutubePremium} from "../../../icons/icons";
import {navigate} from "../../../lib/History";
import {useSelector} from "react-redux";
import OverlayMenuRippleEffect from "../Effect/OverlayMenuRippleEffect";

const DetailPageOverlaySideMenu = ({withIconMenu}) => {

    const {detailPageOverlaySidebar} = useSelector(state => state.app)

    const onClose = () => {
        appActions.updateState({
            detailPageOverlaySidebar:false
        })
    }
    const onClick = () => {
        appActions.updateState({
            detailPageOverlaySidebar:!detailPageOverlaySidebar
        })
    }

    return (
        <Container className={'DetailOverlayMenuContainer'}>
            <Screen onClick={onClose} className={cn({isActive:detailPageOverlaySidebar})} />
            {
                withIconMenu &&
                <IconMenuContainer>
                    <IconSideMenu/>
                </IconMenuContainer>
            }
            <TextMenuContainer className={cn('textMenuContainer',{isActive:detailPageOverlaySidebar})} >
                <SideMenuHeader className={'sideMenuHeader'}>
                    <MenuBars onClick={onClick} className={'menuBars'}>
                        <OverlayMenuRippleEffect>
                            <ItemWrap>
                                <MenuBar/>
                            </ItemWrap>
                        </OverlayMenuRippleEffect>
                    </MenuBars>
                    <Logo onClick={()=>{ navigate('/') }}>
                        <YoutubePremium/>
                    </Logo>
                </SideMenuHeader>
                <MenuContainer>
                    <TextSideMenu />
                </MenuContainer>
            </TextMenuContainer>
        </Container>
    )
}

const Container = styled.div`
    
`;

const Screen = styled.div`
    position:fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1100;
    background:rgba(0,0,0,0.5);
    display:none;
    &.isActive {
        display:block;
    }
`;

const IconMenuContainer = styled.div`
    position:fixed;
    top: 56px;
    bottom: 0;
    left: 0;
`;

const TextMenuContainer = styled.div`
  background:#fff;  
  position:fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1500;
  transform: translateX(-100%);
  transition: 0.4s;
  &.isActive {
      transform: none;
  }
`;
const MenuContainer = styled.div`
  background:#fff;
  position:fixed;
  top: 56px;
  bottom: 0;
  left: 0;
  z-index: 1100;
  overflow-y: auto;
  &:hover {
      &::-webkit-scrollbar-thumb {
        background: #d4d4d4;
      }
  }
  &::-webkit-scrollbar {
  width: 8px;
  }
  &::-webkit-scrollbar-thumb {
  background: #fff;
  }
`

const SideMenuHeader = styled.div`
    display:flex;
    align-items: center;
    width: 246px;
    background:#fff;
    height: 56px;
    box-sizing: border-box;
    padding: 0 20px;  
`;
const MenuBars = styled.div`
    box-sizing: border-box;
    svg{
      padding-left: 1px;
      width: 27px;
      height: 28px;
      fill: #555;
    }
`
const Logo = styled.div`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  position: relative;
  margin-right: 23.5%;
  box-sizing: border-box;
  svg{
    padding-bottom: 1px;
    width: 97px;
    height: 24px;
    position: relative;
    cursor: pointer;
  }
  ::after{
   content: "KR";
    color: #222;
    display: block;
    position: absolute;
    right: -13.5px;
    top: 0;
    font-weight: 500;
    font-size: 8px;
  }
`
const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 0.5px;
`

export default DetailPageOverlaySideMenu;