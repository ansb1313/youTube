import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Route} from "react-router-dom";
import cn from 'classnames';
import RippleEffect from "../Effect/RippleEffect";
import {AppMenu, ArrowLeft, Cam, MenuBar, Notice, SearchIcon, YoutubePremium} from "../../../icons/icons";
import {navigate} from "../../../lib/History";
import SearchBox from "../SearchBox";
import {useSelector} from "react-redux";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import {appActions} from "../../../redux/ActionCreators";
import {media} from "../../../styled/Responsive.Styled";

const MobilSizeHeader = () => {

    const {sidebar, overlaySidebar,detailPageOverlaySidebar} = useSelector(state => state.app)
    const {width} = useWindowDimensions()
    const {viewSearchBox} = useSelector(state => state.app)
    const screenSize = width<845
    useEffect(()=>{
        appActions.updateState({
            viewSearchBox:false
        })
    },[screenSize])

    let sidebarController = () => {
        appActions.updateState({
            sidebar:!sidebar
        })
    }
    let overlaySidebarController = () => {
        appActions.updateState({
            overlaySidebar:!overlaySidebar
        })
    }
    let detailSideMenu = () => {
        appActions.updateState({
            detailPageOverlaySidebar:!detailPageOverlaySidebar
        })
    }

    const onClick = () => {
        if(width<1135){
            return overlaySidebarController()
        }else if(width>1135){
            return sidebarController()
        }
    }
    const onClickDetailSideMenu = () => {
        detailSideMenu()
    }
    const onSearchMenu = (e) => {
        e.stopPropagation()
        appActions.updateState({
            viewSearchBox:!viewSearchBox
        })
    }

    return(
        <MobileSize className={'mobileSize'}>
                <SmallSizeContainer className={'header'}>
                    <MobileSearchMenu className={cn({isActive:viewSearchBox})}>
                        <div className="effectWrap" onClick={onSearchMenu}>
                            <RippleEffect>
                                <Icon>
                                    <ArrowLeft/>
                                </Icon>
                            </RippleEffect>
                        </div>
                        <SearchBox mobileSize={true}/>
                    </MobileSearchMenu>
                    <div className={cn("logoAndMenu", {isActive:viewSearchBox})}>
                        <Route path={['/','/results']} exact={true}>
                            <MenuBars onClick={onClick}>
                                <RippleEffect>
                                    <ItemWrap>
                                        <MenuBar/>
                                    </ItemWrap>
                                </RippleEffect>
                            </MenuBars>
                        </Route>
                        <Route path={['/watch']}>
                            <MenuBars onClick={onClickDetailSideMenu}>
                                <RippleEffect>
                                    <ItemWrap>
                                        <MenuBar/>
                                    </ItemWrap>
                                </RippleEffect>
                            </MenuBars>
                        </Route>
                        <Logo onClick={()=>{ navigate('/') }}>
                            <YoutubePremium/>
                        </Logo>
                    </div>
                    <div className={cn("userIdAndMenuItem",{isActive:viewSearchBox})}>
                        <HeaderItem>
                            <div className="menus">
                                <div className="effectWrap" onClick={onSearchMenu}>
                                    <RippleEffect>
                                        <Icon>
                                            <SearchIcon/>
                                        </Icon>
                                    </RippleEffect>
                                </div>
                                <div className="effectWrap">
                                    <RippleEffect>
                                        <Icon>
                                            <Cam/>
                                        </Icon>
                                    </RippleEffect>
                                </div>
                                <div className="effectWrap">
                                    <RippleEffect>
                                        <Icon>
                                            <AppMenu/>
                                        </Icon>
                                    </RippleEffect>
                                </div>
                                <div className="effectWrap">
                                    <RippleEffect>
                                        <Icon>
                                            <Notice/>
                                        </Icon>
                                    </RippleEffect>
                                </div>
                            </div>
                        </HeaderItem>
                        <UserId>
                            <span>
                                User
                            </span>
                        </UserId>
                    </div>
                </SmallSizeContainer>
        </MobileSize>
    )

}

const MobileSize = styled.div`
  display:none;
  ${media.lessThan('mb')`
    display:flex;
  `}
`
const SmallSizeContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 40px 11px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  .logoAndMenu{
    display: flex;
    align-items: center;
    &.isActive{
      display: none;
    }
  }
  .userIdAndMenuItem{
    display: flex;
    align-items: center;
    &.isActive{
      display: none;
    }
  }
`
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
  margin-right: 30px;
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
const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  
  .effectWrap{
    margin-left: 10px;
  }
  svg{
    width: 28px;
    height: 28px;
    padding-top: 2px;
    padding-left: 2px;
    fill: #606060;
  }
  .menus{
    display: flex;
    align-items: center;
    margin-right: 24px;
  }
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  position: relative;
  cursor: pointer;
`
const UserId = styled.div`
  cursor: pointer;
  margin-right: 1.3%;
  width: 30px;
  height: 30px;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background: #92b7f3;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    color: #fff;
    text-align: center;
    display: block;
    font-size: 10px;
    width: 30px;
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
const MobileSearchMenu = styled.div`
  display: none;
  width: 100%;
  &.isActive{
    display: flex;
  }
  svg{
    width: 24px;
    height: 24px;
    fill: #595959;
  }  
`

export default MobilSizeHeader;